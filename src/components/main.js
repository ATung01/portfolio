import React from 'react'
import Navbar from './navbar'
import Profile from './profile'
import Skills from './skills'
import Experience from './experience'

function Main() {

  return (
    <div className="Main">
      <Navbar/>
      <Profile></Profile>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  ) 
}

export default Main