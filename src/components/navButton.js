import React from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

const Button = styled.div`
`
const Container = styled.div`
position: relative;
height: 75px;
width: 100%;
border-bottom: solid ${props => props.theme.primary};
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 2rem;
color: white;
`
const Menu = styled.ul`
position: absolute;
right: 0px;
top: 73px;
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
  background-color: transparent;
}
li:hover {
  background-color: lightgray;
}
li a {
  width: 100%;
  text-align: left;
  background: ${(props) => props.theme.bg};
  border: solid 1px;
  color: white;
  padding: 5px;
  margin: 0;
  font: inherit;
  text-decoration: none;
  display: block;
}
max-height: 200px; /* Adjust as needed */
overflow-y: auto;
`

function NavButton({links}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }
  const outsideClose = () => {
    setOpen(false)
  }
    return (
      <OutsideClickHandler onOutsideClick={outsideClose}>
        <Container>
          <Button onClick={handleOpen}> 
            Menu
          </Button>
          {open ? (
            <Menu>
              {links.map((link, index) => (
                <li key={link} >
                  <a href={`/${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </Menu>
          ) : null }
        </Container>
      </OutsideClickHandler>
    )
}

export default NavButton