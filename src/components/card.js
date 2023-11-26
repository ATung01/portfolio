import React from "react"
import styled from "styled-components"

const Container = styled.div`
border: solid 4px ${props => props.theme.primary};
min-height: 200px;
width: 80%;
min-width: 200px;
margin: 16px;
display: flex;
flex-direction: column;
`

const Title = styled.h2`
display: flex;
padding: 1rem 1rem 0 1rem;
margin: 0;
justify-content: center;
color: white;
`

const Content = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;
padding: 1rem;
color: white;
`

function Card({title = 'title', content = 'content', className}) {
  return (
    <Container className={className}>
      <Title >{title}</Title>
      <Content >{content}</Content>
    </Container>
  )
}

export default Card