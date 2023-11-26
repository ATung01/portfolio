import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 100%;
// min-height: 400px;
margin: 0 1rem 1rem 1rem;
// border-color: ${props => props.theme.primary};
// border: 2px solid ${props => props.theme.primary};
background-color: transparent;
display: flex;
justify-content: center;
align-content: start;
flex-wrap: wrap;
`

const ButtonContainer = styled.div`
height: 3rem;
width: fit-content;
padding: 5px 15px;
border: 2px solid ${props => props.theme.secondary};
// color: ${props => props.theme.primary};
color: white;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
border-radius: 25px;
margin: 2px;

svg {
  height: 25px;
}
img {
  height: 25px;
}
`



function IconButton({list}, className) {

  return (
    <Wrapper className={className}>
      {console.log(list.skills)}
      {list.skills.map((skill) => {
        return <ButtonContainer>
          {console.log(skill)}
          {skill.svg}
          {skill.name}
        </ButtonContainer>
      })}
      </Wrapper>
  )
}

export default IconButton