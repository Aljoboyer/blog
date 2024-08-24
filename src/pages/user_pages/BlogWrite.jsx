import React, { useState } from 'react'
import RootContainer from '../../components/common/RootContainer';
import BlogEditor from '../../components/BlogEditor/BlogEditor';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { useCreateBlogMutation } from '../../redux/features/blogApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const BlogWrite = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [imgData, setImgData] = useState('')
  const [loading, setLoading] = useState(false)
  const [publishBlog, { }] = useCreateBlogMutation();

  // ---------------Error Message State-----------------//
    const [titleErr, setTitleErr] = useState('')
    const [descriptionErr, setDescriptionErr] = useState('')
    const [imgErr, setImgErr] = useState('')
    const blogToken = localStorage.getItem('blog-token')
    const userData = useSelector((state) => state.commonstore.user)

  const publishHandler = async() => {
    let isValid = true
    setLoading(true)

    if(!title){
      setTitleErr('Please write title')
      isValid = false
    }
    if(!description && description.trimStart().length == 0){
      setDescriptionErr('Please write blog description')
      isValid = false
    }
    else if(isValid){
      const blogFormData = new FormData()

      blogFormData.append('title', title)
      blogFormData.append('description', description)
      blogFormData.append('writtenBy', userData?._id)
      blogFormData.append('imgData', imgData)

     if(imgData){
      blogFormData.append('blogImg', imgData)
     }
     console.log('Img Data', imgData)
     let response = await publishBlog(blogFormData);
     
     if(response?.data?.msg){
      setLoading(false)
      toast.success('Blog Published', {
        position: "top-right",
        autoClose: 1500,
        closeOnClick: true,
        theme: "light",
      });
     }
     else if(response?.error?.data?.message){
      setLoading(false)
      toast.error('Blog Publish Failed', {
        position: "top-right",
        autoClose: 1500,
        closeOnClick: true,
        theme: "light",
      });
     }
      console.log("response ===>", response)
    }
  }
  
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
                editId={false}
                />

                <p className='font-bold text-xl'>Title</p>
                <textarea 
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value.trimStart())}
                type="text" className='w-full outline-none border border-1 border-blue-500 rounded-md mt-2 px-4 py-2' />

               {titleErr &&  <p className='font-medium text-red-600 mt-2'>{titleErr}</p>}

                <p className='font-bold text-xl mt-4'>Description</p>
                <BlogEditor 
                value={description}
                onChange={setDescription}
                />
                {descriptionErr &&  <p className='font-medium text-red-600 mt-2'>{descriptionErr}</p>}

                {
                  loading ? <button className='text-white font-medium text-xl w-[200px] py-4 landing_home_main_container rounded mb-11'>Loading...</button> : <button onClick={publishHandler} className='text-white font-medium text-xl w-[200px] py-4 landing_home_main_container rounded mb-11'>PUBLISH</button>
                }
            </div>
        </div>
    </RootContainer>
  )
}

export default BlogWrite;