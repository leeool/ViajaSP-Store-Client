import React from "react"
import { Background, Column1, Column2, Container } from "./Login.styled"
import ProfilePic from "@/assets/loginPic.jpg"
import { Paragraph, Title } from "@component/Text"
import EmailCheck from "./EmailCheck/EmailCheck"
import useLoginStore from "@/stores/useLoginStore"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

const Login = () => {
  const stage = useLoginStore((state) => state.stage)

  const stages = {
    checkEmail: <EmailCheck />,
    signIn: <SignIn />,
    signUp: <SignUp />
  }

  return (
    <>
      <Background src={ProfilePic} />
      <Container>
        <Column1>
          <Title size="2xl">
            Crie sua conta e <span>aproveite</span> a viagem!
          </Title>
          <Paragraph size="xl">
            Explore destinos deslumbrantes, vivencie culturas fascinantes e crie
            memórias inesquecíveis. Entre na sua conta para iniciar a sua
            jornada.
          </Paragraph>
        </Column1>
        <Column2>{stages[stage]}</Column2>
      </Container>
    </>
  )
}

export default Login
