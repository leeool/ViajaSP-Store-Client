import Header from "@interface/Header/Header"
import { Container, MainContainer } from "@style/Styled"
import React from "react"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </MainContainer>
  )
}

export default App
