import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import { LightTheme } from "./components/Theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <h1>this is a test</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
