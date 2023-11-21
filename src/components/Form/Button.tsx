import theme from "@style/Theme";
import styled from "styled-components";
import { variant } from "styled-system";

interface Props {
  variant?: "primary" | "secondary";
  shape?: "rounded" | "circle";
}

export const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.color.white100};
  padding: 0.4rem 2rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  border: none;
  font-size: 1.2rem;

  &:hover {
    background-color: #d6540c;
  }

  &:active {
    box-shadow: inset 0px 0px 5px 0px #0005;
  }

  &:disabled {
    opacity: 0.5;
    filter: grayscale(1);
    cursor: not-allowed;
  }

  .loading {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }

  ${variant({
  variants: {
    primary: {
      backgroundColor: theme.bg.primary,
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#fff",
      border: `2px solid ${theme.color.primary}`,
      color: theme.color.primary,
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    },
  },
})}

  ${variant({
  prop: "shape",
  variants: {
    rounded: {
      borderRadius: "0.5rem",
    },
    circle: {
      borderRadius: "2rem",
    },
  },
})}
`;
