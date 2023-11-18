import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.svg'
import NavButton from './navButton'
import { useMediaQuery } from 'react-responsive'



const Nav = styled.div`
background-color: rgb(28,28,28);
color: white;
display: flex;
// justify-content: center;
align-items: center;
gap: 2rem;
padding: 0 1rem;
font-size: 1.25rem;

logo-container {
  position: absolute;
  left: 0;
  top: 0;
}

ul {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
}

a {
  color:inherit;
  text-decoration: none;
}

img {
  padding: 0;
  margin: 0;
  width: 75px;
}`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

// const SiteLogo = styled.div`
// .site-logo {
//   display: inline-block;
//   width: 75px;
//   // position: absolute;
//   left: 0px;
//   img {
//     width: 100%;
//   }
// }`

const Links = [
  'About', 'Skills', 'Experience', 'Education', 'Projects'
]

function Navbar() {
  const isNonMobile = useMediaQuery({ minWidth: 768})
  
  return(
    <Nav>
      <LogoContainer>
        <img src={Logo} alt='Logo' />
      </LogoContainer>
      {isNonMobile && (
        <ul>
          {Links.map((link, index) => (
            <li key={link}>
              <a href={`/${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
      {!isNonMobile && <NavButton />}
    </Nav>
  );
}
export default Navbar