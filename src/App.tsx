import Footer from "@interface/Footer/Footer"
import Header from "@interface/Header/Header"
import { Container, MainContainer } from "@style/Styled"
import React from "react"
import { Outlet } from "react-router-dom"
import { useMeMutation } from "./mutations/useUserMutations"

const App = () => {
  const me = useMeMutation()

  React.useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) return

    me.mutate(undefined, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  }, [])

  return (
    <MainContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </MainContainer>
  )
}

export default App
