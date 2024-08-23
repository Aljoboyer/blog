import React from 'react'
import LandingNavBar from '../Navbars';
import Footers from '../Footers/Footers';

const RootContainer = ({children}) => {
  return (
    <div className='w-full'>
      <LandingNavBar/>
        {children}
        <Footers/>
    </div>
  )
}

export default RootContainer;