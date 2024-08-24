import React, { useEffect } from 'react'
import RootContainer from '../../components/common/RootContainer';
import { MdOutlinePerson } from "react-icons/md";
import PlaceHolderImg from '../../assets/placeholder-image.webp'
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useLazyGetSingleBlogQuery } from '../../redux/features/blogApi';
import { FiLoader } from "react-icons/fi";
import moment from 'moment'

const BlogDetails = () => {
  const params = useParams();
  const [triggerBlogDetails, { data: blogDetails , isFetching}] = useLazyGetSingleBlogQuery();

  useEffect(() => {
    if(params?.id){
      triggerBlogDetails(params?.id)
    }
  },[params?.id])

  return (
    <RootContainer>
        {
          isFetching ? <div className='h-full h-screen flex flex-row justify-center items-center'>
          <FiLoader size={80}/>
        </div>  :   <div className='w-full lg:w-9/12 mx-auto my-7'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>{blogDetails?.title}</h1>

          <div className='my-4'>
              <p className='font-medium text-gray-500 text-xl'><MdOutlinePerson size={22} className='inline' /> {blogDetails?.writtenBy?.firstName} {blogDetails?.writtenBy?.lastName}</p>
              <p className='text-gray-400 italic font-medium '><MdOutlineDateRange size={20} className='inline' /> {moment(blogDetails?.createdAt).format('MMM DD, YYYY')}</p>
         </div>

         <div className='w-full md:w-[530px] lg:[800px] md:h-[300px] my-4'>
            {
              blogDetails?.blogImg ?   <img src={`data:image/jpeg;base64,${blogDetails?.blogImg}`} className='card_img rounded-md' alt="" /> :
              <img src={PlaceHolderImg} className='card_img rounded-md' alt="" />
            }
          </div>

         <div className=''
         dangerouslySetInnerHTML={{ __html: blogDetails?.description }}
         />

      </div>
         }
    </RootContainer>
    
  )
}

export default BlogDetails;