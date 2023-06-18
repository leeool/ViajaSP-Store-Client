import { DefaultTheme } from "styled-components"

const theme = {
  color: {
    white100: "#fff",
    white200: "#c9c9c9",
    blue: "#014AAD",
    yellow: "#F8BC00",
    black: "#212121"
  },
  bg: {
    white100: "#fff",
    white200: "#f0f0f0",
    white300: "#c9c9c9",
    blue: "#014AAD",
    yellow: "#F8BC00"
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white100: string
      white200: string
      blue: string
      yellow: string
      black: string
    }
    bg: {
      white100: string
      white200: string
      white300: string
      blue: string
      yellow: string
    }
  }
}

export default theme
