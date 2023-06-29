import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  color?:
    | "white100"
    | "white200"
    | "white300"
    | "white400"
    | "yellow"
    | "blue"
    | "black"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Title = styled.h1<Props>`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.white100};
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  ${variant({
    prop: "color",
    variants: {
      white100: {
        color: "#fff"
      },
      white200: {
        color: "#f0f0f0"
      },
      white300: {
        color: "#b9b9b9"
      },
      white400: {
        color: "#999"
      },
      black: {
        color: "#212121"
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
        fontSize: "1.5rem",
        fontWeight: 500
      },
      lg: {
        fontSize: "2rem",
        "@media (max-width: 768px)": {
          fontSize: "1.5rem"
        }
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

interface ParagraphProps {
  color?:
    | "white100"
    | "white200"
    | "white300"
    | "white400"
    | "yellow"
    | "blue"
    | "black"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 1rem;
  color: ${({ theme }) => theme.bg.white300};
  gap: 1rem;
  line-height: 1.5;

  ${variant({
    prop: "color",
    variants: {
      white100: {
        color: "#fff"
      },
      white200: {
        color: "#f0f0f0"
      },
      white300: {
        color: "#b9b9b9"
      },
      white400: {
        color: "#999"
      },
      black: {
        color: "#212121"
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
        fontSize: "0.6rem"
      },
      md: {
        fontSize: "0.875rem"
      },
      lg: {
        fontSize: "1rem",
        "@media (max-width: 768px)": {
          fontSize: "0.875rem"
        }
      },
      xl: {
        fontSize: "1.25rem",
        "@media (max-width: 768px)": {
          fontSize: "1rem"
        }
      },
      "2xl": {
        fontSize: "1.5rem",
        "@media (max-width: 768px)": {
          fontSize: "1.25rem",
          gap: "1rem"
        }
      }
    }
  })}
`
