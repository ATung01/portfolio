import React from 'react'
import Headshot from './images/Headshot.jpg'

function Profile () {
  
  return (
    <div className="Profile">
      <h2>Hey, </h2>
      <p>I'm Alex Tung. I'm a Full Stack Developer with a non traditional background and a passion for making cool stuff.</p>
      <img className="Headshot" src={Headshot}></img>
      {/* <div className="Shadow"></div> */}
    </div>
  )
}
export default Profile
