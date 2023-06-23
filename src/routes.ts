import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "@page/Home/Home"
import Login from "@page/Login/Login"

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/entrar",
        Component: Login
      }
    ]
  }
])

export default Router
