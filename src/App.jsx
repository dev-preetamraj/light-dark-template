import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { switchTheme } from "./features/themeSlice";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";

const App = () => {
    const dispatch = useDispatch();

    const mode_ = useSelector(state => state.theme.mode);
    const [mode, setMode] = useState(mode_);
    const theme = mode === 'dark' ? darkTheme : lightTheme;

    const handleTheme = () => {
      const _mode_ = mode === 'light' ? 'dark' : 'light';
      setMode(_mode_);
      dispatch(switchTheme(_mode_));
    };
    
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar mode={mode} handleTheme={handleTheme} />
        <Container>
          
        </Container>
      </ThemeProvider>
    );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 5rem;
  padding-top: 0.5rem;
`;