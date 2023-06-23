import React from "react"
import { Container, Logo, Nav } from "./Header.styled"
import { Button } from "@component/Form/Button"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const nav = useNavigate()

  return (
    <Container>
      <Link to={"/"}>
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
      </Link>
      <Nav>
        <Button variant="secondary" onClick={() => nav("/entrar")}>
          Entrar
        </Button>
      </Nav>
    </Container>
  )
}

export default Header
