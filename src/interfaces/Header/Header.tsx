import React from "react";
import { Container, Logo, Nav, VerifyAccount } from "./Header.styled";
import { Button } from "@component/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "@/stores/useUserStore";
import { useSendEmailMutation } from "@/mutations/useUserMutations";
import Menu from "./Menu";
import logo from "@/assets/logo-viajasp.png";

const Header = () => {
  const nav = useNavigate();
  const userData = useUserStore((state) => state.userData);
  const sendVerificationEmail = useSendEmailMutation();

  const handleSendEmail = () => {
    if (!userData) return;
    sendVerificationEmail.mutate(
      { email: userData.email },
      {
        onSuccess: () => {
          alert("Email enviado com sucesso!");
        },
      },
    );
  };

  return (
    <Container>
      <Link to={"/"}>
        <Logo src={logo} />
      </Link>
      <Nav>
        {userData ? (
          <Menu />
        ) : (
          <Button
            variant="primary"
            shape="rounded"
            onClick={() => nav("/entrar")}
          >
            Entrar
          </Button>
        )}
      </Nav>
      {userData && !userData.verified && (
        <VerifyAccount>
          VERIFIQUE A SUA CONTA!{" "}
          <span onClick={handleSendEmail}>
            enviar e-mail de verificação novamente
          </span>
        </VerifyAccount>
      )}
    </Container>
  );
};

export default Header;
