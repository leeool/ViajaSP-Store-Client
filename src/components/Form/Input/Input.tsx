import React from "react"
import { Container, InputContainer, Label, Loading } from "./Input.styled"
import SpinnerLoading from "@component/Loading/SpinnerLoading"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: React.ReactNode
  loading?: boolean
  invalid?: boolean
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<Props>
>(({ label, loading, invalid, id, ...props }: Props, ref) => {
  return (
    <Container>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      {loading ? (
        <Loading>
          <SpinnerLoading />
        </Loading>
      ) : null}
      <InputContainer
        id={id}
        ref={ref}
        data-invalid={invalid}
        disabled={loading || props.disabled}
        {...props}
      />
    </Container>
  )
})

export default Input
