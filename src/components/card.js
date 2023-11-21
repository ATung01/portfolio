import React from "react"
import styled from "styled-components"

const Container = styled.div`
border: solid 3px white;
height: 500px;
width: 300px;
margin: 16px;
display: flex;
flex-direction: column;
`

const Title = styled.h2`
display: flex;
padding: 1rem;
margin: 0;
justify-content: center;
color: white;
`

const Content = styled.div`
display: flex;
justify-content: center;
width: 100%;
color: white;
`

function Card({title = 'title', content = 'content'}) {
  return (
    <Container>
      <Title >{title}</Title>
      <Content >{content}</Content>
    </Container>
  )
}

export default Card