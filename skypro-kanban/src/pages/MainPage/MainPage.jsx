import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList } from '../../../data';
import { themeColors } from '../../styles/Themes';
import GlobalStyle from '../../styles/GlobalStyles';

function MainPage({ isAuth, setIsAuth }) {
     const [theme, setTheme] = useState('light');
     const [cards, setCards] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
          if (isAuth) {
               setCards(cardList);
          } else {
               navigate('/login');
          }

          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
               setTheme(savedTheme);
          }
     }, [isAuth, navigate]);

     const toggleTheme = () => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          localStorage.setItem('theme', newTheme);
     };

     const handleLogout = () => {
          localStorage.removeItem('token');
          setIsAuth(false);
          navigate('/login');
     };

     return (
          <ThemeProvider theme={themeColors[theme]}>
               <GlobalStyle />
               <div className="wrapper">
                    <Header toggleTheme={toggleTheme} handleLogout={handleLogout} />
                    <Main cards={cards} />
               </div>
          </ThemeProvider>
     );
}

export default MainPage;