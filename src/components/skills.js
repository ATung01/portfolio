import React from "react"
import styled from "styled-components"
import Card from "./card";
import IconButton from "./iconButton";
import { ListofSkills } from "./data";

const Wrapper = styled.div`
clip-path: polygon(0 100%, 0 18%, 74% 0, 100% 8%, 100% 100%);
width: 100%;
height: 100%;
background-image: linear-gradient(to right top, #000000, #271c22, #433343, #5b4d6c, #696c99);
}
`

const Container = styled.div`
  width: 76%; 
  height: 100px;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: right;
  @media (max-width: 768px) {
    width: 78%;
  }
  @media (max-width: 319px) {
    width: 80%;
  }
`;

const SkillsText = styled.h2`
  color: ${props => props.theme.primary};
  margin-bottom: -8rem;
  font-size: 2rem;
`;

const CardBLock = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
  align-items: center;
  flex-direction: column;
}
`

const SkillCard = styled(Card)`
// border-color: black;
// color:black;
border-radius: 25px;
`


function Skills() {

  return (
    <div>
      <Wrapper>
        <Container>
          <SkillsText>Skills</SkillsText>
        </Container>
        <CardBLock>
          <SkillCard 
            title="Test" 
            content={<IconButton list={ListofSkills} />}>
          </SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
        </CardBLock>
      </Wrapper>
    </div>

  )
}

export default Skills