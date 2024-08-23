import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nameRegex, passwordRegex } from '../../../utils/regexData';
import { toast } from 'react-toastify';
import { useSignUpMutation } from '../../../redux/features/authApi';
import SignupImg from '../../../assets/sign-up.jpg'
import RootContainer from '../../../components/common/RootContainer';

const SignUp = () => {
    const navigate = useNavigate()
    const [signUpData, setSignUpData] = useState({
        firstName: '', lastName: '',
        email: '', phone: '', password: '', reEnterPassword: '',
    })
   const [nameErr, setNameErr] = useState('')
   const [emailErr, setEmailErr] = useState('')
   const [passwordErr, setPasswordErr] = useState('');
   const [phoneErr, setphoneErr] = useState('');
   const [loading, setLoading] = useState(false)
   const [addSignUp, { }] = useSignUpMutation();

   const validatehandler = () => {
    let isValid  = true;

    if(!signUpData?.firstName || !signUpData?.lastName){
        setNameErr('First name and Last name both required')
        isValid = false
    }
    if (nameRegex.test(signUpData?.firstName) === false || nameRegex.test(signUpData?.lastName) === false  || signUpData?.firstName.trim().length === 0 || signUpData?.lastName.trim().length === 0) {
        setNameErr('Please write proper name without special character and number')
        isValid = false
    }
    if(!signUpData?.email || !signUpData?.email.match(/\S+@\S+\.\S+/)){
        setEmailErr( 'Please input a valid email')
        isValid = false
    }

    if(!signUpData?.password || !signUpData?.reEnterPassword){
        setPasswordErr('Password is required')
        isValid = false
    }
    if(!passwordRegex.test(signUpData?.password) || !passwordRegex.test(signUpData?.reEnterPassword)){
        setPasswordErr( 'Password must be minimum 8th character long with one lowercase , uppercase letters, At least one Number & one special character')
        isValid = false
    }
    if(signUpData?.password !== signUpData?.reEnterPassword){
        setPasswordErr('Password should match with re-enter password')
        isValid = false
    }
    if(!signUpData?.phone){
        setphoneErr('phone name required')
        isValid = false
    }
    if (nameRegex.test(signUpData?.phone) === false   || signUpData?.phone.trim().length === 0 ) {
        setphoneErr('Please write proper phone name without special character and number')
        isValid = false
    }
    if(isValid){
        signUpHandler()
    }
   }

   const signUpHandler = async () => {
    setLoading(true)
    const requestObj = {
        merchantName: signUpData?.phone,
        firstName: signUpData?.firstName,
        lastName: signUpData?.lastName,
        email: signUpData?.email, 
        password: signUpData?.password
    }
    let response = await addSignUp(requestObj);

    console.log(response)
    if(response?.data?.message == "Signed-up successfully!"){
        toast.success('Signed-up successfully!', {
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
                navigate('/login')
            },
            onClose: () => {
            },
            });
    }
    else if(response?.data?.success == 0){
        setEmailErr("Merchant already exists with this email id!")
        toast.error('Signup Failed', {
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
<RootContainer>
    <div className='w-full h-fit xl:h-screen bg-white lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col '>
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
            <div className='px-4 md:px-10 lg:px-24 pt-7'>
                    <div className='bg-black p-4 mt-7 rounded-lg'>
                        <h4 className='text-white font-bold text-xl md:text-2xl lg:text-3xl italic '>Create Account</h4>

                        <div className='mt-7'>
                            <label className='text-white font-medium block md:inline' htmlFor="email">Name *</label>
                            <input 
                            onChange={(e) => {
                            setSignUpData({...signUpData, firstName: e.target.value})
                            setNameErr('')
                            }}
                            className='outline-none border-0 rounded ms-0 md:ms-12 p-2 w-full md:w-fit mt-2 md:mt-0 lg:w-2/6' placeholder='First Name'/>
                            <input
                            onChange={(e) => {
                            setSignUpData({...signUpData, lastName: e.target.value})
                            setNameErr('')
                            }}
                            className='outline-none border-0 rounded ms-0 md:ms-2 lg:ms-17 xl:ms-4 p-2 mt-4 xl:mt-0 w-full md:w-fit lg:w-2/6' placeholder='Last Name'/>

                        {
                        nameErr && <div className=' mt-2 ms-16'>
                        <p className='text-[12px] font-bold text-red-500 ms-0 md:ms-11  text-start'>{nameErr}</p>
                        </div> 
                        }
                        </div>
                        
                        <div className='my-7 w-full'>
                            <label className='text-white font-medium block md:inline' htmlFor="email">Email *</label>
                            <input onChange={(e) => {
                            setSignUpData({...signUpData, email: e.target.value})
                            setEmailErr('')
                            }} className='outline-none border-0 rounded ms-0 md:ms-12 p-2 w-full mt-2 md:mt-0 md:w-4/6 lg:w-1/2  xl:w-3/4' placeholder='Your Email'/>
                            {
                        emailErr && <div className=' mt-2 ms-14'>
                        <p className='text-[12px] font-bold text-red-500 ms-11  text-start'>{emailErr}</p>
                        </div> 
                        }

                        </div>

                        
                        <div className='mt-7'>
                            <label className='text-white font-medium  block md:inline' htmlFor="email">Phone *</label>
                            <input
                            onChange={(e) => {
                            setSignUpData({...signUpData, phone: e.target.value})
                            setphoneErr('')
                            }}
                            className='outline-none border-0 rounded ms-0 md:ms-11 mt-2 md:mt-0 w-full md:w-fit p-2' placeholder='Your phone name'/>
                            {
                            phoneErr && <div className=' mt-2 ms-14'>
                        <p className='text-[12px] font-bold text-red-500 ms-11  text-start'>{phoneErr}</p>
                        </div> 
                        }
                        </div>

                        <div className='mt-7'>
                            <label className='text-white font-medium block md:inline' htmlFor="email">Password *</label>
                            <input 
                            onChange={(e) => {
                            setSignUpData({...signUpData, password: e.target.value})
                            setPasswordErr('')
                            }}
                            type='password'
                            className='outline-none border-0 rounded ms-0 md:ms-6 mt-2 md:mt-0 w-full md:w-fit p-2' placeholder='Enter new password'/>

                            {
                        passwordErr && <div className=' mt-2 ms-14'>
                        <p className='text-[12px] font-bold text-red-500 ms-11  text-start'>{passwordErr}</p>
                        </div> 
                        }

                        </div>

                        {
                        loading ? <button className='font-bold bg-white px-5 py-2 ms-24 rounded mt-7 '>Loading...</button> : <button onClick={validatehandler} className='font-bold side_bar_style px-5 py-2 ms-24 rounded mt-7 text-white'>Sign Up</button>
                        }

                        <p className='text-lg text-white italic my-4'>Already have an account?  <span onClick={() => navigate('/login')} className='font-bold text-blue-400 underline cursor-pointer'>Login</span></p>
                </div>
            </div>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 '>
            <img className='w-full h-full' src={SignupImg} alt="" />
        </div>
    </div>
</RootContainer>
  )
}

export default SignUp ;