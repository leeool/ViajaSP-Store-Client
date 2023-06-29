import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "@page/Home/Home"
import Login from "@page/Login/Login"
import Verify from "@page/Verify/Verify"
import TripPackage from "@page/TripPackage/TripPackage"

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
      },
      {
        path: "/viagem/:id",
        Component: TripPackage
      }
    ]
  },
  {
    path: "/auth",
    Component: Verify
  }
])

export default Router
