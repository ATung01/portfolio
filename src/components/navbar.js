import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 1rem;

  .site-title {
    font-size: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color:inherit;
    text-decoration: none;
  }
  
`
function Navbar() {



  return(
    <Nav className="navbar">
      <a href='/' className='site-title'>
        Alex Tung
      </a>
      <ul>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/blah'>blah</a>
        </li>
      </ul>
    </Nav>
  )
}
export default Navbar