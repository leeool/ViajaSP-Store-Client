import PackagesShowcase from "@interface/PackagesShowcase/PackagesShowcase"
import React from "react"
import { Container, LoadingContainer } from "./Home.styled"
import { Packages } from "./Packages/Packages"
import useStore from "@/stores/useStore"
import SpinnerLoading from "@component/Loading/SpinnerLoading"

const Home = () => {
  const isLoading = useStore((state) => state.loading)

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <SpinnerLoading />
        </LoadingContainer>
      ) : null}
      <PackagesShowcase />
      <Packages />
    </Container>
  )
}

export default Home
