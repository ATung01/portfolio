import React from "react"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'

const Wrapper = styled.div`
height: 100%;
// background-color: ${props => props.theme.bg};
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.12) 012%, rgba(3,3,3,0.89) 100%);
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
grid-template-rows: 1fr 10px 1fr 1fr;
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
  grid-row: 1 / 6;
  height: 175px;
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
font-size: 1.2rem;
padding: 1rem;
margin-top: -20px;
@media (max-width: 768px) {
  grid-column: 1 / 6;
}
`
const Spacer = styled.div`
height: 200px;
`

function Experience() {

  return (
    <Wrapper>
      <h2>Experience</h2>
      <Spacer></Spacer>
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
        <Card>
          <Title>Oppenheimer - Client Service Associate</Title>
          <Content>
            - Managed an existing base of thousands of accounts for 7-national in-house branches.{'\n'}
            - Communicated with financial advisers and external money managers to facilitate trading.{'\n'}
            - Developed relationships and learned the various personal needs of individuals in order to better manage expectation levels at all parts of the process when bringing in new business.
          </Content>
        </Card>
        <Spacer></Spacer>
      </div>
    </Wrapper>
  )
}

export default Experience