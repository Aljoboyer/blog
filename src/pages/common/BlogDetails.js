import React from 'react'
import RootContainer from '../../components/common/RootContainer';
import { MdOutlinePerson } from "react-icons/md";
import PlaceHolderImg from '../../assets/placeholder-image.webp'
import { MdOutlineDateRange } from "react-icons/md";

const BlogDetails = () => {
  return (
    <RootContainer>
        <div className='w-full w-9/12 mx-auto my-7'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>The Death of Critical Thinking Will Kill Us Long Before AI.</h1>

            <div className='my-4'>
                <p className='font-medium text-gray-500 text-xl'><MdOutlinePerson size={22} className='inline' /> Jhon Doe</p>
                <p className='text-gray-400 italic font-medium '><MdOutlineDateRange size={20} className='inline' /> Sep 22, 2023</p>
           </div>

           <div className='w-full md:w-[530px] lg:[800px] md:h-[300px] my-4'>
                <img src={PlaceHolderImg} className='card_img rounded-md' alt="" />
            </div>

           <div className=''>
                <p className='my-4 text-lg '>We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. We have witnessed a multi-generational decline in reading comprehension. We read less, retain less of what we read. </p>
                
           </div>

        </div>
    </RootContainer>
    
  )
}

export default BlogDetails;