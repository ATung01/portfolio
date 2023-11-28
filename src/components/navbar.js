import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.svg'
import NavButton from './navButton'
import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'

const Wrapper = styled.div`
position: sticky;
top: 0px;
background: black;
z-index: 1;
`

const Nav = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
border-bottom: solid ${props => props.theme.primary};

height: 75px;
gap: 2rem;
padding: 0 1rem;
font-size: 1.25rem;

ul {
  list-style: none;
  display: flex;
  gap: 4rem;
}

.siteLinks {
  color: white;
}

a {
  color:inherit;
  text-decoration: none;
  cursor: pointer;
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
    <Wrapper>
      <LogoContainer>
        <img src={Logo} alt='Logo' />
      </LogoContainer>
        {isNonMobile && <Nav>
          <ul>
            {Links.map((link, index) => (
              <li key={link} className="siteLinks">
                <Link to={link.toLowerCase()} smooth={true} duration={500} offset={-75}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
         </Nav>}
      {!isNonMobile && <NavButton links={Links}/>}
    </Wrapper>
  );
}
export default Navbar