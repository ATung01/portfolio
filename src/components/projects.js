import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"

const Wrapper = styled.div`
height: 1100px;
h2 {
  font-size: 2rem;
  color: ${props => props.theme.primary};
  text-align: center;
}
@media (max-width: 768px) {
  height: 1200px;  
}
@media (max-width: 500px) {
  height: 1600px;
}
`

const Container = styled.div`
`

const Card = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 60px 1fr 1fr;
height: 100%;
color:white;
padding: 1.2rem;
a {
  font-size: 1.8rem;
  color:white;
}
img {
  grid-column: 5;
  grid-row: 1 / 3;
  height: 150px;
  width: auto;
  border-radius: 25px;
}
p{
  grid-row: 2;
  grid-column: 1 / 4;
}
`

const ReverseCard = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 60px 1fr 1fr;
height: 100%;
color:white;
padding: 1.2rem;
a {
  font-size: 1.8rem;
  color:white;
  text-align: right;
  grid-column: -1;
}
img {
  grid-column: 2;
  grid-row: 1 / 3;
  height: 100px;
  width: auto;
  border-radius: 25px;
}
p{
  grid-row: 2;
  grid-column: -1;
  text-align: right;
}
`

function Projects() {
  return (
    <Wrapper>
      <Element name="projects">
        <div id="projects"> 
        </div>
      </Element>
      <h2>Cool Stuff I've Made</h2>
      <Container>
        <Card>
          <a href="https://colinallred.com/">Colin Allred</a>
          <img src="https://colinallred.com/wp-content/uploads/sites/272/popup-image.jpg" alt="Colin Allred"></img>
          <p>Website developed and deployed with React/Heroku/Wix. Was a digital consultant
            on this congressional campaign, that we won!</p>
        </Card>
        <ReverseCard>
          <a href="https://github.com/ATung01/mSnapTools">Marvel Snap Bot</a>
          <img src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Marvel Snap Robot"></img>
          <p>Wrote a bot to play Marvel Snap for me using OCR to determine moves. Used Tesseract.js and Node. Learning experience only!</p>
        </ReverseCard>
        <Card>
          <a href="https://github.com/ATung01/indescribbleable">Indescribbleable</a>
          {/* <img src="https://i.pinimg.com/736x/07/29/ef/0729efabec77ed4a13b11c27453189e0.jpg" alt="indescribbleable stick figure"></img> */}
          <p>Capstone project from Flatiron School. Think of Pictionary in real time with an AI element. Made with React front with a Ruby backend. Currently down.</p>
        </Card>
        <ReverseCard>
          <a href="https://alextung.netlify.app/">This website!</a>
          <p>This website was made from scratch with no prebuilt components. Used React and Styled Components heavily.</p>
        </ReverseCard>
      </Container>
    </Wrapper>
  )
}

export default Projects