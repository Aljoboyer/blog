import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RootContainer from '../../components/common/RootContainer';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useDeleteBlogMutation, useLazyGetPersonalBlogQuery } from '../../redux/features/blogApi';
import { FiLoader } from "react-icons/fi";

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
    const response = await deleteBlog(deleteId)
  }

  return (
    <RootContainer>
        {
          isFetching ? <div className='h-full h-screen flex flex-row justify-center items-center'>
            <FiLoader size={80}/>
          </div> : <>
            {
              personalBlogList && personalBlogList?.length > 0 && <section className='w-full lg:w-11/12	mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
              {
                 personalBlogList?.map((item) => (
                   <BlogCard deleteHandler={deleteHandler} blog={item} from="personal"/>
                 ))
              }
           </section>
            }
          </>
        }
        
    </RootContainer>

  )
}

export default PersonalBlogs;