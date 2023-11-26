import React from "react";
import styled from "styled-components";
import Card from "./card";

const Wrapper = styled.div`
height: 1200px;
background-color: ${props => props.theme.bg};
h2 {
  color: white;
  margin-top: 0;
}
div.container {
  display: flex;
  // justify-content: center;
  // align-items: stretch;
  flex-direction: column;
  height: 100%;
  width: 100%;
  // background: white;
}
`
const NewCard = styled(Card)`
// flex-direction: row;
// align-items: center;
// border: none;
// height: 600px;
width: 98%;
margin-bottom: 30px;
.Title {
  justify-content: start;
}
.Content {
  white-space: pre-line;
  margin-left: 30px;
}
`


function Experience() {
  return (
    <Wrapper>
      <h2>Experience</h2>
      <div className="container">
        <NewCard title="Digidems - Digital Consultant" content={`- Nationally visible Congressional campaign \n
                  - Advised on, developed, and deployed campaign website.\n
                  - Created and customized small programs based on need.\n
                  - Developed and implemented cyber security plan.\n  
                  - Supported (deploying, setting up, operating, troubleshooting, trained staff) core tech platforms for a campaign.`
                  }>
        </NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
      </div>
    </Wrapper>
  )
}

export default Experience