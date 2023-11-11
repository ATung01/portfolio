import React from 'react'
import Headshot from './images/Headshot.jpg'

function Profile () {
  
  return (
    <div className="Profile">
      <img className="Headshot" src={Headshot}></img>
      <div className="Shadow"></div>
    </div>
  )
}
export default Profile
