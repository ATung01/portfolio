import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.svg'
import { useMediaQuery } from 'react-responsive'


const Nav = styled.div`
background-color: rgb(28,28,28);
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
  gap: 3rem;
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
const Links = [
  'About', 'Skills', 'Experience', 'Education', 'Projects'
]

function Navbar() {
  const isNonMobile = useMediaQuery({ minWidth: 768})
  
  return(
    isNonMobile && (
      <Nav className="navbar">
        <a href='/' className='site-title'>
          <img src={Logo} alt='Logo'></img>
        </a>
        <ul>
          <li>
            <a href='/about'>{Links[0]}</a>
          </li>
          <li>
            <a href='/skills'>{Links[1]}</a>
          </li>
          <li>
            <a href='/experience'>{Links[2]}</a>
          </li>
          <li>
            <a href='/education'>{Links[3]}</a>
          </li>
          <li>
            <a href='/projects'>{Links[4]}</a>
          </li>
        </ul>
      </Nav> 
    )
  )
}
export default Navbar