import React from "react";
import styled from "styled-components";

const Button = styled.div`
`
const Container = styled.div`
position: relative;
`
const Menu = styled.ul`
position: absolute;
right: 0px;
list-style-type: none;
margin: 0;
padding: 0;
gap: 0 !important;
border: 1px solid grey;
width: 150px;
flex-direction: column;
li {
  margin: 0;
  padding: 0;
  background-color: white;
}
li:hover {
  background-color: lightgray;
}
li a {
  width: 100%;
  text-align: left;
  background: none;
  color: black;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  text-decoration: none;
  color: black;
  display: block;
}

`

function NavButton({links}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }
    return (
      <Container>
        <Button onClick={handleOpen}> 
          Menu
        </Button>
        {open ? (
          <Menu>
            {links.map((link, index) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </Menu>
        ) : null }
      </Container>
    )
}

export default NavButton