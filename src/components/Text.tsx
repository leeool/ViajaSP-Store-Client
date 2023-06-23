import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  color?: "white" | "yellow" | "blue"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Title = styled.h1<Props>`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.white100};
  display: flex;
  align-items: center;
  gap: 1rem;

  ${variant({
    prop: "color",
    variants: {
      white: {
        color: "#fff"
      },
      yellow: {
        color: "#F8BC00"
      },
      blue: {
        color: "#014AAD"
      }
    }
  })}

  ${variant({
    prop: "size",
    variants: {
      sm: {
        fontSize: "1rem"
      },
      md: {
        fontSize: "1.5rem"
      },
      lg: {
        fontSize: "2rem"
      },
      xl: {
        fontSize: "2.5rem"
      },
      "2xl": {
        fontSize: "3rem",
        "@media (max-width: 768px)": {
          fontSize: "2rem",
          gap: "0.5rem"
        }
      }
    }
  })}
`

export const Paragraph = styled.p<Props>`
  font-size: 1rem;
  color: ${({ theme }) => theme.bg.white300};
  gap: 1rem;
`
