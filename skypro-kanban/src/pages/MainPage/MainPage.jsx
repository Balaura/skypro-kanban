import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList } from '../../../data';

function MainPage({ isAuth, setIsAuth, toggleTheme, currentTheme }) {
     const [cards, setCards] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
          if (isAuth) {
               setCards(cardList);
          } else {
               navigate('/login');
          }
     }, [isAuth, navigate]);

     const handleLogout = () => {
          localStorage.removeItem('token');
          setIsAuth(false);
          navigate('/login');
     };

     return (
          <div className="wrapper">
               <Header
                    toggleTheme={toggleTheme}
                    currentTheme={currentTheme}
                    handleLogout={handleLogout}
                    setIsAuth={setIsAuth}
               />
               <Main cards={cards} />
          </div>
     );
}

export default MainPage;