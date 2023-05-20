import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import "./style.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Header />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
