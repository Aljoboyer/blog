import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RootContainer from '../../components/common/RootContainer';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useDeleteBlogMutation, useLazyGetPersonalBlogQuery } from '../../redux/features/blogApi';
import { FiLoader } from "react-icons/fi";
import { toast } from 'react-toastify';

const PersonalBlogs = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [triggerPersonalBlogs, { data: personalBlogList , isFetching}] = useLazyGetPersonalBlogQuery();
  const [deleteBlog, { isLoading}] = useDeleteBlogMutation();

  useEffect(() => {
    if(params?.id){
        triggerPersonalBlogs(params?.id)
    }
  },[params?.id])

  const deleteHandler = async (deleteId) => {
    const response = await deleteBlog({blog_id: deleteId, user_id: params?.id})
    if(response?.data?.msg == 'Deleted'){
      triggerPersonalBlogs(params?.id)
      toast.success('Blog Deleted Successfully', {
        position: "top-right",
        autoClose: 1500,
        closeOnClick: true,
        theme: "light",
      });
    }
  }

  return (
    <RootContainer>
        {
          isFetching ? <div className='h-full h-screen flex flex-row justify-center items-center'>
            <FiLoader size={80}/>
          </div> : <>
            {
              personalBlogList && personalBlogList?.length > 0 ? <section className='w-full lg:w-11/12	mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
              {
                 personalBlogList?.map((item) => (
                   <BlogCard deleteHandler={deleteHandler} blog={item} from="personal"/>
                 ))
              }
           </section> : <section className='w-full lg:w-11/12	mx-auto my-14 h-screen'>
                <h1 className='text-xl md:text-3xl lg:text-5xl text-blue-700'>You Have No Blog</h1>
                <button onClick={() => navigate('/BlogWrite')} className='landing_home_main_container text-white font-medium w-[300px] text-xl py-4 rounded-md my-7'>Write Blog</button>
           </section>
            }
          </>
        }
        
    </RootContainer>

  )
}

export default PersonalBlogs;