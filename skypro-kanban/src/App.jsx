import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './contexts/UserContext';
import { TaskProvider } from './contexts/TaskContext';
import { ThemeContextProvider, useTheme } from './contexts/ThemeContext'; 

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <GlobalStyle />
      <UserProvider>
        <TaskProvider>
          <Router>
            <AppRoutes />
          </Router>
        </TaskProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default function WrappedApp() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}