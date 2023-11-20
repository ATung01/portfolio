import React from 'react'
import Navbar from './navbar'
import Profile from './profile'
import Skills from './skills'

function Main() {

  return (
    <div className="Main">
      <Navbar/>
      <Profile></Profile>
      <Skills></Skills>
    </div>
  ) 
}

export default Main