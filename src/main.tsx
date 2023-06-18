import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import Router from "./routes.ts"
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"
import { GlobalStyle } from "@style/Global.styled.tsx"
import theme from "@style/Theme.tsx"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
