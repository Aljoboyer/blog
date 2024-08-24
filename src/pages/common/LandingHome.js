import React from 'react'
import { useNavigate } from 'react-router-dom';
import RootContainer from '../../components/common/RootContainer';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useGetBlogsQuery } from '../../redux/features/blogApi';
import { FiLoader } from "react-icons/fi";

const LandingHome = () => {
  const navigate = useNavigate()
  const { data: blogData , isFetching} = useGetBlogsQuery({
    refetchOnMountOrArgChange: true,
  });
  console.log('blogData --------->>', blogData, isFetching)

  return (
    <RootContainer>
        <section className='w-full landing_home_header h-screen'>
              <div className='w-full h-full flex flex-row justify-start items-center'>
                <div className='w-full lg:w-1/2 ps-4 lg:ps-11'>
                    <h1 className='text-2xl md:text-3xl lg:text-7xl font-bold text-white'>Create a blog <br/>
                      worth sharing</h1>
                      <p className='text-lg md:text-xl mt-4 text-gray-400'>Get a full suite of intuitive design features and powerful marketing tools <br/> to create a unique blog that leaves a lasting impression.</p>
                      <button onClick={() => navigate('/login')} className='w-[150px] py-4 side_bar_style text-white font-medium text-lg rounded-md mt-4'>Get Started</button>
                </div>
              </div>
        </section>

        {
          isFetching ? <div className='h-full h-[500px] flex flex-row justify-center items-center'>
            <FiLoader size={80}/>
          </div> : <>
            {
              blogData && blogData?.length > 0 && <section className='w-full lg:w-11/12	mx-auto my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
              {
                 blogData?.map((item) => (
                   <BlogCard blog={item}/>
                 ))
              }
           </section>
            }
          </>
        }
        
    </RootContainer>

  )
}

export default LandingHome;