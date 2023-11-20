import React from 'react'
import Headshot from './images/Headshot.jpg'
import styled from 'styled-components'

const Hero = styled.div`
width:100%;
height:600px;
display: flex;
justify-content: center;
align-items: flex-start;

.profileContainer {
  display: flex;
  height: auto;
  width: 65%;
  justify-content: center;
  align-items: center;
}

.profileContainer .intro {
  flex-direction: column;
  margin: 2rem;
}

h1 {
  color:${props => props.theme.secondary};
}
p {
  color: white;
}

.headshot {
  width: 18rem;
  margin: 2rem auto;
  border-radius: 50%;
}

.github {
  background-color: ${props => props.theme.secondary};
  color: white;
  border-radius:10px;
  padding: 15px;
  min-height:30px; 
  min-width: 150px;
}

@media (max-width: 768px) {
  height: 800px;
  .profileContainer {
    flex-direction: column-reverse;
  }
  .profileContainer .headshot {
    margin: 2rem;
  }
}

@media (max-width: 319px) {
  height: 900px;
  .profileContainer .headshot {
    width: 8rem;
  }
  p {
    width: 100%;
  }
}

`


function Profile () {
  
  return (
    <Hero className="profile">
      <div className='profileContainer'>
        <div className='intro'>
          <h1>Hey, I'm Alex Tung</h1>
          <p>I'm a Full Stack Developer with a non traditional background and a 
          passion for making cool stuff. Go check out what I've made at my Github or you can just explore my site.</p>
          <button className='github'>Github Profile</button>
        </div>
        <img className="headshot" src={Headshot}></img>
      </div>
    </Hero>
  )
}
export default Profile
