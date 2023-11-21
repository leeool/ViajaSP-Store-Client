import React from "react";
import { Container, Content, Item, Logo } from "./Footer.styled";
import { Title } from "@component/Text";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-viajasp.png";

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} />
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
          <p>
            <Link to={"/sobre"}>Sobre nós</Link>
          </p>
        </Item>
      </Content>
    </Container>
  );
};

export default Footer;
