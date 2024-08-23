import React, { useEffect, useState } from 'react'
import PlaceHolderImg from '../../../../assets/image/placeholder-image.webp';
import { useNavigate } from 'react-router-dom';
import { passwordRegex } from '../../../../helper/regexData';
import { toast } from 'react-toastify';
import { useLogInMutation } from '../../../../redux/features/authApi';

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [loading, setLoading] = useState(false)
  
const validationHandler = () => {
    let isValid = true
      if(!email){
        setEmailErr('Email is required')
        isValid = false
        return
      }
      if(!email.match(/\S+@\S+\.\S+/)){
        setEmailErr('Please input a valid email')
        isValid = false
        return
        }
    if(isValid){
        setLoading(true)
        toast.success('Email sent successfully!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onOpen: () => {
                setLoading(false)
            },
            onClose: () => {
            },
            });
    }
  }
  return (
    <div className='w-full h-fit lg:h-screen landing_home_main_container xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='flex flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-7'>
            <h4 onClick={() => navigate('/')}  className='text-white font-bold text-3xl italic cursor-pointer'>PixPlay</h4>
               <h4 onClick={() => navigate('/login')} className='text-white  text-2xl  cursor-pointer'>BACK</h4>
            </div>

           <div className='px-4 md:px-10 lg:px-24 pt-11'>
              <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic mt-11'>Enter your email, and we will send a password recovery link to your email.</h4>

                 <div className='bg-black p-4 mt-7 rounded-lg '>
                      {/* <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Login</h4> */}

                      <div className='mt-4'>
                          <label className='text-white font-medium' htmlFor="email">Email *</label>
                          <input
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailErr('')
                          }}
                          
                          className='outline-none border-0 rounded ms-11 p-2' placeholder='Email'/>
                       {
                        emailErr && <div className=' mt-4 ms-14'>
                       <p className='text-sm font-bold text-red-500 ms-11  text-start'>{emailErr}</p>
                       </div> 
                       }
                      </div>
                      
                     {
                      loading ?  <button className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Loading...</button> :  <button onClick={validationHandler} className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Send</button>
                     }
                </div>

            </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 '>
            <img className='w-full h-full' src={PlaceHolderImg} alt="" />
        </div>
    </div>
  )
}

export default ForgotPassword ;