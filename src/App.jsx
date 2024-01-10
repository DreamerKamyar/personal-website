import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { LightTheme } from "./components/Theme";
import { RouterProvider } from "react-router-dom";
import route from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={route}>
        <GlobalStyle />
        <ThemeProvider theme={LightTheme}></ThemeProvider>
      </RouterProvider>
    </>
  );
}

export default App;
