import React from 'react'
import Navbar from './navbar'
import Profile from './profile'
import Skills from './skills'
import Experience from './experience'
import Education from './education'

function Main() {

  return (
    <div className="Main">
      <Navbar/>
      <Profile></Profile>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </div>
  ) 
}

export default Main