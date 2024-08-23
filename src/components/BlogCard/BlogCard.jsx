import React from 'react'
import PlaceHolderImg from '../../assets/placeholder-image.webp'
import { MdOutlinePerson } from "react-icons/md";

const BlogCard = () => {
  return (
    <div className='w-full blog_card p-4 cursor-pointer rounded-md'>
        <div className='w-full md:w-[430px] md:h-[300px]'>
            <img src={PlaceHolderImg} className='card_img rounded-md' alt="" />
        </div>
        <div className='px-4'>
            <h1 className='font-bold text-lg md:text-xl my-4'>The Death of Critical Thinking Will Kill Us Long Before AI.</h1>
            <p className='my-4'>We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read</p>
    <hr/>
           <div className='flex flex-row justify-between items-center'>
                <p className='font-bold text-gray-500'><MdOutlinePerson size={18} className='inline' /> Jhon Doe</p>
                <p className='text-gray-400 italic font-medium'>Sep 22, 2023</p>
           </div>
        </div>
    </div>
  )
}

export default BlogCard;