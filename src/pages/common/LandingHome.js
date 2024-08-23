import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingHome = () => {
  const navigate = useNavigate()

  return (
    <section className='w-full landing_home_header h-screen'>
        <div className='w-full h-full flex flex-row justify-start items-center'>
           <div className='w-full lg:w-1/2  ps-2 md:ps-4 lg:ps-11'>
              <h1 className='text-2xl md:text-3xl lg:text-7xl font-bold text-white'>Create a blog <br/>
                worth sharing</h1>
                <p className='text-lg md:text-xl mt-4 text-gray-400'>Get a full suite of intuitive design features and powerful marketing tools <br/> to create a unique blog that leaves a lasting impression.</p>
                <button onClick={() => navigate('/login')} className='w-[150px] py-4 side_bar_style text-white font-medium text-lg rounded-md mt-4'>Get Started</button>
           </div>
        </div>
    </section>
  )
}

export default LandingHome;