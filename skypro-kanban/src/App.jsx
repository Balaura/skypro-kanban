import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './contexts/UserContext';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <GlobalStyle />
      <UserProvider>
        <TaskProvider>
          <Router>
            <AppRoutes toggleTheme={toggleTheme} currentTheme={theme} />
          </Router>
        </TaskProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;