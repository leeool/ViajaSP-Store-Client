import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Readex Pro", sans-serif;
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.bg.white100};
  }
`
