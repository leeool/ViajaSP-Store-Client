import PackagesShowcase from "@interface/PackagesShowcase/PackagesShowcase"
import React from "react"
import { Container } from "./Home.styled"
import { Packages } from "./Packages/Packages"

const Home = () => {
  return (
    <Container>
      <PackagesShowcase />
      <Packages />
    </Container>
  )
}

export default Home
