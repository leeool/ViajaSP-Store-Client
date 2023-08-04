import React from "react"
import { Container, Content, Item, Logo } from "./Footer.styled"
import { Title } from "@component/Text"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container>
      <Logo>
        <svg
          width="60"
          height="39"
          viewBox="0 0 60 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.0218 38.8231L0 16.1594L35.7642 10.9192L25.0218 38.8231Z"
            fill="#F8BC00"
          />
          <path
            d="M25.0217 38.8231L38.1222 4.631L59.9999 0.176849L25.0217 38.8231Z"
            fill="#E97142"
          />
        </svg>
        Viaja SP
      </Logo>
      <Content>
        <Item>
          <Title size="md">Contato</Title>
          <p>viajasp@gmail.com</p>
        </Item>
        <Item>
          <Title size="md">Ajuda</Title>
          <p>Termos de uso</p>
        </Item>
        <Item>
          <Title size="md">Sobre</Title>
          <Link to={"/sobre"}>Sobre nós</Link>
        </Item>
      </Content>
    </Container>
  )
}

export default Footer
