import React from 'react'
import RootContainer from '../../components/common/RootContainer';
import BlogEditor from '../../components/BlogEditor/BlogEditor';

const BlogWrite = () => {
  return (
    <RootContainer>
        <div className='w-full lg:w-10/12 mx-auto'>
             <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>Write Your Blog</h1>

            <div className='w-full lg:w-7/12 mx-auto'>
                <p className='font-bold text-xl'>Title</p>
                <textarea type="text" className='w-full outline-none border border-1 border-blue-500 rounded-md mt-2 px-4 py-2' />

                <p className='font-bold text-xl mt-4'>Description</p>
                <BlogEditor/>
            </div>
        </div>
    </RootContainer>
  )
}

export default BlogWrite;