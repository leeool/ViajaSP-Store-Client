import React from "react"
import { Back, Container, Wrapper } from "./SignIn.styled"
import { Controller, useForm } from "react-hook-form"
import { Title } from "@component/Text"
import Input from "@component/Form/Input/Input"
import { Button } from "@component/Form/Button"
import { ChevronLeftIcon, SignInIcon } from "@primer/octicons-react"
import useLoginStore from "@/stores/useLoginStore"
import { useMeMutation, useSignInMutation } from "@/mutations/useUserMutations"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const { control, handleSubmit } = useForm()
  const email = useLoginStore((state) => state.email)
  const setStage = useLoginStore((state) => state.setStage)
  const signIn = useSignInMutation()
  const me = useMeMutation()
  const nav = useNavigate()

  const handleSignIn = handleSubmit((data) => {
    const user = {
      email: email,
      password: data.password
    }

    signIn.mutate(user, {
      onSuccess: async () => {
        await me.mutateAsync()
        nav("/")
      }
    })
  })

  return (
    <Container onSubmit={handleSignIn}>
      <Wrapper>
        <Back onClick={() => setStage("checkEmail")}>
          <ChevronLeftIcon />
          {email}
        </Back>
        <Title size="lg">Entrar</Title>
      </Wrapper>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field }) => (
          <Input
            id="password"
            autoFocus
            type="password"
            label="Digite sua senha"
            placeholder="***********"
            loading={signIn.isLoading || me.isLoading}
            {...field}
          />
        )}
      />
      <Button variant="secondary" disabled={signIn.isLoading || me.isLoading}>
        Entrar <SignInIcon />
      </Button>
    </Container>
  )
}

export default SignIn
