import React from "react"
import styled from "styled-components"
import Card from "./card";

const Wrapper = styled.div`
clip-path: polygon(0 100%, 0 18%, 74% 0, 100% 8%, 100% 100%);
width: 100%;
height: 800px;
background-image: linear-gradient(to right top, #000000, #271c22, #433343, #5b4d6c, #696c99);
}
`

const Container = styled.div`
  width: 75%; 
  height: 100px;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const SkillsText = styled.h2`
  color: ${props => props.theme.primary};
`;

const CardBLock = styled.div`
display: flex;
`


function Skills() {

  return (
    <div>
      <Wrapper>
        <Container>
          <SkillsText>Skills</SkillsText>
        </Container>
        <CardBLock>
          <Card title="Test" content="Ipsum"></Card>
          <Card></Card>
          <Card></Card>
        </CardBLock>
      </Wrapper>
    </div>

  )
}

export default Skills