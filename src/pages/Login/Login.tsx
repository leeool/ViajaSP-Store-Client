import React from "react"
import { Background, Container } from "./Login.styled"
import ProfilePic from "@/assets/loginPic.jpg"

const Login = () => {
  return (
    <Container>
      <Background src={ProfilePic} />
    </Container>
  )
}

export default Login
