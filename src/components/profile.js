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
  margin-top: 4rem;
}

.profileContainer .intro {
  flex-direction: column;
  margin: 2rem;
}

h1 {
  color:${props => props.theme.primary};
  font-size: 2.5rem;
}
p {
  color: white;
  font-size: 1.2rem;
  a {
    color:${props => props.theme.primary};
  }
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
  // min-width: 150px;
  width:200px;
  margin-top: 5rem;
}

@media (max-width: 768px) {
  height: 1000px;
  .profileContainer {
    flex-direction: column-reverse;
  }
  .profileContainer .headshot {
    margin: 2rem;
  }
}

@media (max-width: 320px) {
  height: 800px;
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
          passion for making cool stuff. Go check out what I've made at my Github or you can just explore my site.
          You can also contact me at{' '}
            <a href="mailto:Acc.tung@gmail.com">Acc.tung@gmail.com</a>.</p>
          <button className='github' onClick={() => window.open('https://github.com/atung01', '_blank')}>
            Go to Github
          </button>
        </div>
        <img className="headshot" alt='Headshot' src={Headshot}></img>
      </div>
    </Hero>
  )
}
export default Profile
