import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { LightTheme } from "./components/Theme";
import { RouterProvider } from "react-router-dom";
import route from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <RouterProvider router={route}>
          <GlobalStyle />
        </RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
