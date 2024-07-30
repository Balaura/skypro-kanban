import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <GlobalStyle />
      <Router>
        <AppRoutes toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;