import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height: 400px;
margin: 0 1rem 1rem 1rem;
// border-color: ${props => props.theme.primary};
// border: 2px solid ${props => props.theme.primary};
background-color: transparent;
display: flex;
justify-content: center;
`

const ButtonContainer = styled.div`
max-height: 3.5rem;
width: fit-content;
padding: 5px 15px;
border: 2px solid red;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
border-radius: 25px;

svg {
  height:40px;
}
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