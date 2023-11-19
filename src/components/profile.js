import React from 'react'
import Headshot from './images/Headshot.jpg'

function Profile () {
  
  return (
    <div className="profile">
      <div className='profileContainer'>
        <div className='intro'>
          <h2>Hey!</h2>
          <p>I'm Alex Tung. I'm a Full Stack Developer with a non traditional background and a 
          passion for making cool stuff. Go check out what I've made at my Github or you can just explore my site.</p>
        </div>
        <img className="Headshot" src={Headshot}></img>
      </div>
    </div>
  )
}
export default Profile
