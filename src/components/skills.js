import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
clip-path: polygon(0 100%, 0 18%, 74% 0, 100% 8%, 100% 100%);
width: 100%;
height: 800px;
background-image: linear-gradient(to right top, #000000, #271c22, #433343, #5b4d6c, #696c99);
`

function Skills() {

  return (
    <Wrapper></Wrapper>
  )
}

export default Skills