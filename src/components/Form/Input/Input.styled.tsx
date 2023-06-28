import styled from "styled-components"
import { variant } from "styled-system"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  color: #fff;
`

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #00000050;
  outline: 2px solid #fff;
  color: #fff;

  &:focus {
    outline-color: ${({ theme }) => theme.color.yellow};
  }

  &[data-invalid="true"] {
    outline-color: #f04d4d;
  }

  &:disabled {
    cursor: wait;
  }

  ${variant({
    variants: {
      primary: {
        color: "#fff",
        backgroundColor: "#00000050",
        outlineColor: "#fff",
        "&:focus": {
          outlineColor: "#f04d4d"
        },
        "&[data-invalid='true']": {
          outlineColor: "#f04d4d"
        },
        "&:disabled": {
          cursor: "wait"
        }
      },
      secondary: {
        color: "#000",
        backgroundColor: "#fff",
        outlineColor: "#000",
        "&:focus": {
          outlineColor: "#f04d4d"
        },
        "&[data-invalid='true']": {
          outlineColor: "#f04d4d"
        },
        "&:disabled": {
          cursor: "wait"
        }
      }
    }
  })}
`

export const Loading = styled.div`
  position: absolute;
  right: 2%;
  bottom: 13%;
  width: 1.25rem;
  height: 1.25rem;
`
