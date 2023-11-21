import { DefaultTheme } from "styled-components";

export const theme = {
  color: {
    white100: "#fff",
    white200: "#c9c9c9",
    primary: "#f6540c",
    secondary: "#32293d",
    black: "#212121",
  },
  bg: {
    white100: "#fff",
    white200: "#f0f0f0",
    white300: "#b9b9b9",
    primary: "#f6540c",
    secondary: "#32293d",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white100: string;
      white200: string;
      primary: string;
      secondary: string;
      black: string;
    };
    bg: {
      white100: string;
      white200: string;
      white300: string;
      primary: string;
      secondary: string;
    };
  }
}

export default theme;
