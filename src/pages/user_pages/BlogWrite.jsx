import React, { useEffect, useState } from 'react'
import RootContainer from '../../components/common/RootContainer';
import BlogEditor from '../../components/BlogEditor/BlogEditor';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { useCreateBlogMutation, useLazyGetSingleBlogQuery, useUpdateBlogMutation } from '../../redux/features/blogApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const BlogWrite = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [imgData, setImgData] = useState('')
  const [loading, setLoading] = useState(false)
  const [publishBlog, { }] = useCreateBlogMutation();
  const [updateBlog, { }] = useUpdateBlogMutation();
  const [triggerBlogDetails, { data: blogDetails , isFetching}] = useLazyGetSingleBlogQuery();

  // ---------------Error Message State-----------------//
    const [titleErr, setTitleErr] = useState('')
    const [descriptionErr, setDescriptionErr] = useState('')
    const [imgErr, setImgErr] = useState('')
    const userData = useSelector((state) => state.commonstore.user)
  console.log('userData', userData)
  const publishHandler = async() => {
    let isValid = true
    setLoading(true)

    if(!title){
      setTitleErr('Please write title')
      isValid = false
      setLoading(false)
    }
    if(!description && description.trimStart().length == 0){
      setDescriptionErr('Please write blog description')
      isValid = false
      setLoading(false)

    }
    else if(isValid){
      if(params?.id){
        const blogFormData = new FormData()

        blogFormData.append('title', title)
        blogFormData.append('description', description)
        blogFormData.append('editId', blogDetails?._id)
  
       if(imgData){
        blogFormData.append('blogImg', imgData)
       }
         
       let response = await updateBlog(blogFormData);
       console.log("response ===>", response)
  
       if(response?.data?.msg){
        setLoading(false)
        navigate(`/PersonalBlogs/${userData?._id}`)
        toast.success('Blog Updated Successfully', {
          position: "top-right",
          autoClose: 1000,
          closeOnClick: true,
          theme: "light",
        });
       }
       else{
        setLoading(false)
        toast.error('Blog Update Failed', {
          position: "top-right",
          autoClose: 1500,
          closeOnClick: true,
          theme: "light",
        });
       }
      }
     else{
      const blogFormData = new FormData()

      blogFormData.append('title', title)
      blogFormData.append('description', description)
      blogFormData.append('writtenBy', userData?._id)

     if(imgData){
      blogFormData.append('blogImg', imgData)
     }
          
     let response = await publishBlog(blogFormData);

     if(response?.data?.msg){
      setLoading(false)
      navigate(`/PersonalBlogs/${userData?._id}`)
      toast.success('Blog Published', {
        position: "top-right",
        autoClose: 1500,
        closeOnClick: true,
        theme: "light",
      });
     }
     else{
      setLoading(false)
      toast.error('Blog Publish Failed', {
        position: "top-right",
        autoClose: 1500,
        closeOnClick: true,
        theme: "light",
      });
     }
     }
    }
  }
  
  useEffect(() => {
    if(params?.id){
      triggerBlogDetails(params?.id)
    }
  },[params?.id])

  useEffect(() => {
    if(blogDetails?._id){
      setTitle(blogDetails?.title)
      setDescription(blogDetails?.description)
      setPreview(blogDetails?.blogImg)
    }
  },[blogDetails?._id, isFetching])
 
  return (
    <RootContainer>
        <div className='w-full lg:w-10/12 mx-auto px-4 lg:px-0'>
             <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-7'>Write Your Blog</h1>

            <div className='w-full lg:w-7/12 mx-auto'>
                <ImageUpload
                setImgData={setImgData}
                setPreview={setPreview}
                preview={preview}
                imgErr={imgErr}
                imgData={imgData}
                editId={params?.id ? true : false}
                />

                <p className='font-bold text-xl'>Title</p>
                <textarea 
                defaultValue={title}
                onInput={(e) => {
                  setTitle(e.target.value.trimStart())
                  setTitleErr('')
                }}
                type="text" className='w-full outline-none border border-1 border-blue-500 rounded-md mt-2 px-4 py-2' />

               {titleErr &&  <p className='font-medium text-red-600 mt-2'>{titleErr}</p>}

                <p className='font-bold text-xl mt-4'>Description</p>
                <BlogEditor 
                value={description}
                onChange={setDescription}
                />
                {descriptionErr &&  <p className='font-medium text-red-600 mt-2'>{descriptionErr}</p>}

                {
                  loading ? <button className='text-white font-medium text-xl w-[200px] py-4 landing_home_main_container rounded mb-11'>Loading...</button> : <button onClick={publishHandler} className='text-white font-medium text-xl w-[200px] py-4 landing_home_main_container rounded mb-11'> {params?.id ? 'UPDATE' : 'PUBLISH'}</button>
                }
            </div>
        </div>
    </RootContainer>
  )
}

export default BlogWrite;