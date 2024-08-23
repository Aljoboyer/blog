import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { passwordRegex } from '../../../utils/regexData';
import { toast } from 'react-toastify';
import { useLogInMutation } from '../../../redux/features/authApi';
import LoginImg from '../../../assets/login.jpg'

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({email: '', password: ''})
  const [loginErr, setLoginErr] = useState({
    emailErr: '', passwordErr: ''
  })
  const [loading, setLoading] = useState(false)
  const [userLogin, { }] = useLogInMutation();

  const validationHandler = () => {
    // console.log('clicked')
      if(!loginData?.email && !loginData?.password){
        setLoginErr({...loginErr, emailErr: 'Email is required', passwordErr: 'Password is required',})
        return
      }
      if(!loginData?.email){
        setLoginErr({...loginErr, emailErr: 'Email is required'})
        return
      }
      if(!loginData?.password){
        setLoginErr({...loginErr, passwordErr: 'Password is required',})
        return
      }
      if(loginData?.email && loginData?.password){
        let isValid = true
        if(!loginData?.email.match(/\S+@\S+\.\S+/)){
            setLoginErr({...loginErr, emailErr: 'Please input a valid email'})
            isValid = false
            return
        }
        if(!passwordRegex.test(loginData?.password)){
            setLoginErr({...loginErr, passwordErr: 'Password must be minimum 8th character long with one lowercase , uppercase letters, At least one Number & one special character'})
            isValid = false
        }
        if(isValid){
            loginHandler()
        }
    }
  }

  const loginHandler = async () => {
    setLoading(true)
  
    let response = await userLogin(loginData);

    console.log("response ===>", response)

    if(response?.data?.message == "Logged-in successfully!"){
      localStorage.setItem('pixplayToken', response?.data?.token)

        toast.success('Logged-in successfully!', {
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
                navigate('/dashboard/admin-home')
            },
            onClose: () => {
            },
            });
    }
    else if(response?.data?.success == 0 && response?.data?.data == 'User not exists, Please signup!'){
      setLoginErr({emailErr: 'User not exists, Please signup!'})
        toast.error('Login Failed', {
            position: "top-right",
            autoClose: 1000,
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
    else if(response?.data?.success == 0 && response?.data?.data == 'Password is wrong or invalid!'){
      setLoginErr({passwordErr: 'Password is wrong or invalid'})
        toast.error('Login Failed', {
            position: "top-right",
            autoClose: 1000,
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
    <div className='w-full h-fit lg:h-screen bg-black xl:flex xl:flex-row lg:flex lg:flex-row  md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='flex flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-7'>
               <h4 onClick={() => navigate('/sign-up')} className='text-white  text-2xl  cursor-pointer'>SIGN UP</h4>
            </div>

           <div className='px-4 md:px-10 lg:px-24 pt-11'>
              <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic mt-11'>Your brand, our innovation-a perfect match <br /> in the digital revolation!</h4>

                 <div className='bg-black p-4 mt-7 rounded-lg '>
                      <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Login</h4>

                      <div className='mt-4'>
                          <label className='text-white font-medium' htmlFor="email">Email *</label>
                          <input
                          onChange={(e) => {
                            setLoginData({...loginData, email: e.target.value})
                            setLoginErr({
                                emailErr: '',
                              })
                          }}
                          disabled={loginData?.phone ? true : false}
                          className='outline-none border-0 rounded ms-11 p-2' placeholder='Email'/>
                       {
                        loginErr?.emailErr && <div className=' mt-4 ms-14'>
                       <p className='text-sm font-bold text-red-500 ms-11  text-start'>{loginErr?.emailErr}</p>
                       </div> 
                       }
                      </div>

                      <div className='mt-4'>
                          <label className='text-white font-medium' htmlFor="email">Password *</label>
                          <input
                           onChange={(e) => {
                            setLoginData({...loginData, password: e.target.value})
                            setLoginErr({...loginErr,  passwordErr: ''})
                          }}
                          disabled={loginData?.phone ? true : false}
                          type='password' className='outline-none border-0 rounded ms-[20px] lg:ms-17 xl:ms-4 p-2 mt-4 lg:mt-4 xl:mt-0' placeholder='Password'/>
                      {
                        loginErr?.passwordErr && <div className=' mt-4 ms-14'>
                        <p className='text-sm font-bold text-red-500 ms-11  text-start'>{loginErr?.passwordErr}</p>
                       </div> 
                       }
                      </div>
                      
                      <div className='mt-4'>
                          <p
                          onClick={() => navigate('/forgot-password')}
                          className='cursor-pointer font-bold italic text-blue-400 text-[15px] ms-[100px] md:ms-[100px] xl:ms-[100px]'>Forgot Password ?</p>
                      </div>
                     {
                      loading ?  <button className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Loading...</button> :  <button onClick={validationHandler} className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Login</button>
                     }
                </div>

            </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 '>
            <img className='w-full h-full' src={LoginImg} alt="" />
        </div>
    </div>
  )
}

export default Login ;