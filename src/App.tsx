import React from "react";
import { ThemeProvider } from "styled-components";
import { Content, Main } from "./App.styles";
import { Header, Sidebar, Overlay } from "./components";
import { Home } from "./pages";
import { GlobalStyles, theme } from "./styled";

function App() {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleOpenSidebar = () => setOpenSidebar((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header handleOpenSidebar={handleOpenSidebar} />

      <Content>
        <Overlay openSidebar={openSidebar} />

        <Sidebar openSidebar={openSidebar} />

        <Main className={`${openSidebar ? "openSidebar" : ""}`}>
          <Home />
        </Main>
      </Content>
    </ThemeProvider>
  );
}

export default App;
