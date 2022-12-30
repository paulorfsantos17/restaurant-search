import React from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import "./App.css";
import { Home } from "./pages/Home/index";

import {theme, themeStyled} from "./theme";

function App() {
  return (
    <ThemeProviderStyled theme={themeStyled}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemeProviderStyled>
  );
}

export default App;
