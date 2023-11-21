import React from "react";
import { Container } from "./SignUp.styled";
import useLoginStore from "@/stores/useLoginStore";
import { Title } from "@component/Text";
import { Back, Wrapper } from "../SignIn/SignIn.styled";
import { ChevronLeftIcon, SignInIcon } from "@primer/octicons-react";
import Input from "@component/Form/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@component/Form/Button";
import { useMutation } from "react-query";
import axiosInstance from "@/API/axiosInstance";
import { useMeMutation } from "@/mutations/useUserMutations";
import { useNavigate } from "react-router-dom";

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const email = useLoginStore((state) => state.email);
  const setStage = useLoginStore((state) => state.setStage);
  const { control, handleSubmit } = useForm();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (data: DataProps) => {
      return axiosInstance.post("/customer", data).then((res) => res.data);
    },
  });
  const me = useMeMutation();
  const nav = useNavigate();

  const handleCreateUser = handleSubmit((data) => {
    if (data.password !== data.passwordConfirm) return;

    const user = {
      name: data.name,
      email: email,
      password: data.password,
    };

    mutate(user, {
      onSuccess: async (data) => {
        localStorage.setItem("token", data.token);
        console.log(data);
        alert("Verifique seu email para confirmar sua conta.");
        await me.mutateAsync();
        nav("/");
      },
    });
  });

  return (
    <Container onSubmit={handleCreateUser}>
      <Wrapper>
        <Back onClick={() => setStage("checkEmail")}>
          <ChevronLeftIcon />
          Voltar
        </Back>
        <Title size="lg">Crie sua conta</Title>
      </Wrapper>
      <Controller
        defaultValue=""
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            id="name"
            label="Nome completo"
            type="text"
            autoFocus
            loading={isLoading}
            placeholder={email.split("@")[0]}
            {...field}
          />
        )}
      />
      <Controller
        defaultValue=""
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            id="password"
            label="Digite sua senha"
            type="password"
            loading={isLoading}
            placeholder="***********"
            {...field}
          />
        )}
      />
      <Controller
        defaultValue=""
        control={control}
        name="passwordConfirm"
        render={({ field }) => (
          <Input
            id="passwordConfirm"
            label="Confirme sua senha"
            type="password"
            placeholder="***********"
            loading={isLoading}
            {...field}
          />
        )}
      />
      <Button variant="secondary" disabled={isLoading}>
        Criar <SignInIcon />
      </Button>
    </Container>
  );
};

export default SignUp;
