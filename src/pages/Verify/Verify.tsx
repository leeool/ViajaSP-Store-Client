import React from "react"
import { Container, Content, Logo, Wrapper } from "./Verify.styled"
import { Paragraph, Title } from "@component/Text"
import SpinnerLoading from "@component/Loading/SpinnerLoading"
import { Button } from "@component/Form/Button"
import { MailIcon } from "@primer/octicons-react"
import { useVerifyEmail } from "@/mutations/useUserMutations"
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom"

const Verify = () => {
  const [search] = useSearchParams()
  const { mutate, isLoading } = useVerifyEmail()
  const { token, id } = React.useMemo(() => {
    const token = search.get("token")
    const userId = search.get("userId")

    return { token, id: userId }
  }, [search])
  const nav = useNavigate()

  const handleVerifyEmail = () => {
    if (!token || !id) return

    mutate(
      { token, id },
      {
        onSuccess: () => {
          alert("Email verificado com sucesso!")
          nav("/")
        },
        onError: () => {
          console.log("Erro ao verificar e-mail.")
          alert("E-mail já verificado.")
        },
        onSettled: () => {
          console.log("Finalizado.")
        }
      }
    )
  }

  if (!token || !id) return <Navigate to={"/"} />
  return (
    <Container>
      <Content>
        <Logo>
          <Link to={"/"}>
            <span>
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
            </span>
          </Link>
        </Logo>
        <Wrapper>
          <Title color="blue">Bem-vindo(a) à Viaja SP</Title>
          <Paragraph size="lg" color="white400">
            Estamos empolgados em tê-lo(a) como parte da nossa comunidade de
            viajantes. Prepare-se para embarcar em aventuras emocionantes e
            criar lembranças extraordinárias.
          </Paragraph>
          <Paragraph size="lg" color="white400">
            Agradecemos por escolher a Viaja SP e mal podemos esperar para
            começar a compartilhar experiências inesquecíveis com você!
          </Paragraph>
          <Button
            shape="rounded"
            onClick={handleVerifyEmail}
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerLoading />
            ) : (
              <>
                <MailIcon />
                Confirmar E-mail
              </>
            )}
          </Button>
          {/* <SpinnerLoading /> */}
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Verify
