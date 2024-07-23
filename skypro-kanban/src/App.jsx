import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CardPage from './pages/CardPage';
import ExitPage from './pages/ExitPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              isAuth ? (
                <MainPage toggleTheme={toggleTheme} setIsAuth={setIsAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/card/:id"
            element={
              isAuth ? <CardPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/exit"
            element={
              isAuth ? <ExitPage setIsAuth={setIsAuth} /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;