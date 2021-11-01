import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ThemeProvider } from "theme-ui"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ThemeBackground } from "./utils/useTheme"
import { theme } from "./utils/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeBackground>
        <App />
      </ThemeBackground>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
