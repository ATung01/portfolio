import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 100%;
margin: 0 1rem 1rem 1rem;
border-color: ${props => props.theme.primary};
border: 2px solid ${props => props.theme.primary};
background-color: transparent;

svg {
  height:40px;
}
`

const ButtonContainer = styled.div`
min-height: 2rem;
width: fit-content;
padding: 5px 15px;
border: 2px solid red;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
border-radius: 25px;
`



function IconButton({list}, className) {
  return (
    <Wrapper className={className}>
      <ButtonContainer>
        {console.log(list[0].skills[0].svg)}
        {list[0].skills[0].svg}
        {list[0].skills[0].name}
      </ButtonContainer>
    </Wrapper>
  )
}

export default IconButton