import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
height: 900px;
h2 {
  text-align: center;
  color: ${props => props.theme.primary}
}
`

const Container = styled.div`
height: 80%;
// width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
`
const CardWrapperOne = styled.div`
width: 100%;
grid-column: 2
`
const CardWrapperTwo = styled.div`
width: 100%;
grid-row: 3;
grid-column: 1 / 5;
display: flex;
justify-content: end;
`

const CardOne = styled.div`
height: 300px;
width: 300px;
// border: solid 2px red;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img {
  height: 75px;
  width: auto;
  background: white;
  border-radius: 25px;
}
`

const CardTwo = styled.div`
height: 300px;
width: 300px;
// border: solid 2px red;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img {
  border-radius: 25px;
}
`


function Education() {
  return (
    <Wrapper>
      <h2>Education</h2>
      <Container>
        <CardWrapperOne>
          <CardOne>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" alt="Flatiron school Logo"></img>
            <h3>Flatiron School</h3>
            <p>Coding bootcamp for Javascript and Ruby</p>
          </CardOne>
        </CardWrapperOne>
        <CardWrapperTwo>
          <CardTwo>
            <img src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ffzcteovogms8nt3ziw7" alt="NYU Tandon logo"></img>
            <h3>NYU Tandon School of Engineering</h3>
            <p>B.S  in Business & Technology Management</p>
          </CardTwo>
        </CardWrapperTwo>
      </Container>

    </Wrapper>
  )
}

export default Education