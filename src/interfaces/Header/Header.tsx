import React from "react"
import { Container, Logo, Nav, VerifyAccount } from "./Header.styled"
import { Button } from "@component/Form/Button"
import { Link, useNavigate } from "react-router-dom"
import useUserStore from "@/stores/useUserStore"
import { useSendEmailMutation } from "@/mutations/useUserMutations"

const Header = () => {
  const nav = useNavigate()
  const userData = useUserStore((state) => state.userData)
  const sendVerificationEmail = useSendEmailMutation()

  const handleSendEmail = () => {
    if (!userData) return
    sendVerificationEmail.mutate(
      { email: userData.email },
      {
        onSuccess: () => {
          alert("Email enviado com sucesso!")
        }
      }
    )
  }

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
        {userData ? (
          <Button variant="secondary">Minha conta</Button>
        ) : (
          <Button variant="secondary" onClick={() => nav("/entrar")}>
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
  )
}

export default Header
