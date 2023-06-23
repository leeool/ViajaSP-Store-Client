import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  variant?: "primary" | "secondary"
  shape?: "rounded" | "circle"
}

export const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.bg.blue};
  color: ${({ theme }) => theme.color.white100};
  padding: 0.4rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.bg.white100};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #00429e;
  }

  &:active {
    box-shadow: inset 0px 0px 5px 0px #0005;
  }

  &:disabled {
    opacity: 0.5;
    filter: grayscale(1);
    cursor: not-allowed;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "transparent",
        color: "#fff",
        borderColor: "#fff"
      },
      secondary: {
        backgroundColor: "#fff",
        color: "#014AAD",
        "&:hover": {
          backgroundColor: "#f0f0f0"
        }
      }
    }
  })}

  ${variant({
    prop: "shape",
    variants: {
      rounded: {
        borderRadius: "0.5rem"
      },
      circle: {
        borderRadius: "2rem"
      }
    }
  })}
`
