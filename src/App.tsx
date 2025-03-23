import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import { theme } from "./styles/theme"
import HomePage from "./pages/HomePage"
import UserDetailsPage from "./pages/UserDetailsPage"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

