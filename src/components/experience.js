import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height: 1200px;
background-color: ${props => props.theme.bg};
h2 {
  color: ${props => props.theme.primary};
  margin-top: 0;
  font-size: 2rem;
}
div.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
`
const Card = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr 30px 1fr 1fr;
height: auto;
border-top: solid 4px ${props => props.theme.primary};
border-bottom: solid 4px ${props => props.theme.primary};
// border-radius: 25px;
padding: 16px;
// background-color:white;
color: white;
width: 100%;
img {
  grid-column: 5;
  grid-row: 1 / 5;
  height: 200px;
  width: auto;
  @media (max-width: 768px) {
    height: 75px;
  }
}
`
const Title = styled.div`
grid-column: 1 / 4;
font-size: 1.8rem;
`
const Content = styled.div`
grid-column: 1 / 5;
grid-row: 3 / 5;
white-space: pre-line;
`
const Spacer = styled.div`
height: 200px;
`

function Experience() {
  return (
    <Wrapper>
      <h2>Experience</h2>
      <div className="container">
        <Card>
          <Title>Digidems - Digital Consultant / Web Developer</Title>
          <Content>
            - Nationally visible Congressional campaign{'\n'}
            - Advised on, developed, and deployed campaign website.{'\n'}
            - Created and customized small programs based on need.{'\n'}
            - Developed and implemented cyber security plan.{'\n'}  
            - Supported (deploying, setting up, operating, troubleshooting, trained staff) core tech platforms for a campaign.
          </Content>
          <img src="https://images.squarespace-cdn.com/content/v1/5e3386fca1edc769087962a9/9ecf767e-ef8e-4517-b7a5-9dcfdf39f227/DigiDems-Primary+-+Vertical-main.png" alt="Digidem Logo"></img>
        </Card>
        <Spacer></Spacer>
        <Card></Card>
      </div>
    </Wrapper>
  )
}

export default Experience