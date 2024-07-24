import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={themeColors.light}>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;