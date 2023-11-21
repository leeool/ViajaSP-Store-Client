import { Button } from "@component/Form/Button";
import Input from "@component/Form/Input/Input";
import { Title } from "@component/Text";
import { ArrowRightIcon } from "@primer/octicons-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Container } from "./EmailCheck.styled";
import { useMutation } from "react-query";
import axiosInstance from "@/API/axiosInstance";
import useLoginStore from "@/stores/useLoginStore";
import { AxiosError } from "axios";

const EmailCheck = () => {
  const setStage = useLoginStore((state) => state.setStage);
  const setEmail = useLoginStore((state) => state.setEmail);
  const email = useLoginStore((state) => state.email);
  const { handleSubmit, control, getValues } = useForm();
  const { mutate, isLoading } = useMutation<ICustomer>({
    mutationKey: ["checkEmail", getValues("email")],
    mutationFn: async () => {
      return axiosInstance
        .get(`/customer?email=${getValues("email")}`)
        .then((res) => res.data);
    },
  });

  const handleCheckEmail = handleSubmit((data) => {
    setEmail(data.email);

    mutate(undefined, {
      onSuccess: (data) => {
        if (data) {
          setStage("signIn");
        } else {
          setStage("signUp");
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response?.data.error);
        }
      },
    });
  });

  return (
    <Container onSubmit={handleCheckEmail}>
      <Title size="lg">Entre na sua conta aqui</Title>
      <Controller
        control={control}
        defaultValue={email}
        name="email"
        render={({ field }) => (
          <Input
            label="Endereço de E-mail"
            type="email"
            id="email"
            autoFocus
            placeholder="exemplo@email.com"
            loading={isLoading}
            {...field}
          />
        )}
      />

      <Button variant="primary" shape="rounded" disabled={isLoading}>
        Avançar
        <ArrowRightIcon size={18} />
      </Button>
    </Container>
  );
};

export default EmailCheck;
