import { ThemeProvider } from "@emotion/react"
import theme from "./core/layout/layout"
import { AuthContextProvider } from "./router/validations/Auth/context/Auth-context"
import Router from "./router/Router"
import { RouterProvider } from "react-router-dom"


function App() {
return (
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <RouterProvider router={Router} />
    </AuthContextProvider>
  </ThemeProvider>
)
}

export default App
