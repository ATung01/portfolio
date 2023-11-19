import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.svg'
import NavButton from './navButton'
import { useMediaQuery } from 'react-responsive'



const Nav = styled.div`
background-color: rgb(28,28,28);
color: white;
display: flex;
justify-content: center;
align-items: center;
border-bottom: solid rgb(184,225,243);
height: 75px;
gap: 2rem;
padding: 0 1rem;
font-size: 1.25rem;

ul {
  list-style: none;
  display: flex;
  gap: 3rem;
}

.siteLinks {
  // color: rgb(184,225,243);
  color: white;
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
width: 75px;
position: absolute;
img {
  width: 100%;
}
`

const Links = [
  'About', 'Skills', 'Experience', 'Education', 'Projects'
]

function Navbar() {
  const isNonMobile = useMediaQuery({ minWidth: 768})
  
  return(
    <div>
      <LogoContainer>
        <img src={Logo} alt='Logo' />
      </LogoContainer>
        {isNonMobile && <Nav>
          <ul>
            {Links.map((link, index) => (
              <li key={link} className="siteLinks">
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
         </Nav>}
      {!isNonMobile && <NavButton links={Links}/>}
    </div>
  );
}
export default Navbar