import React from 'react'
import PlaceHolderImg from '../../assets/placeholder-image.webp'
import { MdOutlinePerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const BlogCard = ({blog, from = '', deleteHandler}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => {
      if(from !== 'personal'){
        navigate(`/BlogDetails/${blog?._id}`)
      }
    }} className='w-full blog_card p-4 cursor-pointer rounded-md'>
        <div className='w-full md:w-[430px] md:h-[300px]'>
          {
            blog?.blogImg ? <img className='card_img rounded-md' src={`data:image/jpeg;base64,${blog?.blogImg}`} /> :  <img src={PlaceHolderImg} className='card_img rounded-md' alt="" /> 
            
          }
           
        </div>
        <div className='px-4'>
            <h1 className='font-bold text-lg md:text-xl my-4'>{blog?.title}</h1>
            <p className='my-4'    dangerouslySetInnerHTML={{ __html: blog?.description?.slice(0, 150) }}/>
            <p className='my-4 text-blue-400 underline'  onClick={() => navigate(`/BlogDetails/${blog?._id}`)}>Read More</p>
    <hr/>
           <div className='flex flex-row justify-between items-center'>
            {
              from == 'personal' ? <div className='flex flex-row'>
                <LiaEdit onClick={(e) =>navigate(`/BlogWrite/${blog?._id}`)}  size={22} color='#0359d2'/>
                  <RiDeleteBinLine onClick={() => deleteHandler(blog?._id)} size={22} color='red' className='ms-2'/>
              </div> :  <p className='font-bold text-gray-500'><MdOutlinePerson size={18} className='inline' /> {blog?.writtenBy?.firstName} {blog?.writtenBy?.lastName}</p>
            }
               
              <p className='text-gray-400 italic font-medium'>{moment(blog?.createdAt).format('MMM DD, YYYY')}</p>
           </div>
        </div>
    </div>
  )
}

export default BlogCard;