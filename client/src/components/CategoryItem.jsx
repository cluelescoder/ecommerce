import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
width:100%;
height: 100%;
object-fit:cover;
${mobile({ height: "30vh" })}
`
const Info = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color:white;
margin-bottom:20px
`
const Button = styled.button`
    border: 2px solid;
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
    border-color: white;
    color:white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    &:hover {
    transform: scale(1.25);
  }
`


export default function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}
