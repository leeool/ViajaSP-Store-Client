import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "@page/Home/Home"

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home
      }
    ]
  }
])

export default Router
