import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.svg'

const Nav = styled.div`
  // background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  font-size: 1.25rem;

  .site-title {
    display: flex;
    font-size: 2rem;
    align-items: center;
    width: 75px;
    position: absolute;
    left: 0px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 5rem;
  }

  a {
    color:inherit;
    text-decoration: none;
  }

  img {
    padding: 0;
    margin: 0;
    width: 100%;
  }  
`
function Navbar() {

  return(
    <Nav className="navbar">
      <a href='/' className='site-title'>
        <img src={Logo}></img>
      </a>
      <ul>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/skills'>Skills</a>
        </li>
        <li>
          <a href='/experience'>Experience</a>
        </li>
        <li>
          <a href='/education'>Education</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
      </ul>
      <button>Github</button>
    </Nav>
  )
}
export default Navbar