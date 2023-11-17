import React from 'react'
import Navbar from './navbar'
import Profile from './profile'
import { useMediaQuery } from 'react-responsive'


function Main() {
  const isNonMobile = useMediaQuery({ minWidth: 768})
  const isMobile = useMediaQuery({ maxWidth: 767})

  return (
    <div className="Main">
      { isNonMobile && <Navbar/> }
      <Profile></Profile>
    </div>
  ) 
}

export default Main