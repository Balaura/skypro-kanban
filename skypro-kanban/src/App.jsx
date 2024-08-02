import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    localStorage.setItem('theme', 'light');
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  return (
    <ThemeProvider theme={themeColors[theme]}>
      <GlobalStyle />
      <Router>
        <AppRoutes toggleTheme={toggleTheme} currentTheme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;