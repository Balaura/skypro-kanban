

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/Popups/PopBrowse/PopBrowse';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopUser from './components/Popups/PopUser/PopUser';
import { cardList } from '../data';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import ExitPage from './pages/ExitPage';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isNewCardPopupOpen, setIsNewCardPopupOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
  }, []);

  function onCardAdd(newCard) {
    setCards([...cards, newCard]);
  }

  const onCardEdit = (editedCard) => {
    setCards(cards.map(card => card.id === editedCard.id ? editedCard : card));
    setEditingCard(null);
  };

  const onCardDelete = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };
  const ProtectedRoute = ({ children }) => {
    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <Router>
        <div className='wrapper'>
          <Routes>
            <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
            <Route path="/register" element={<RegisterPage setIsAuth={setIsAuth} />} />
            <Route path="/" element={
              <ProtectedRoute>
                <MainPage cards={cards} onCardAdd={onCardAdd} isLoading={isLoading} />
              </ProtectedRoute>
            } />
            <Route path="/card/:id" element={
              <ProtectedRoute>
                <CardPage />
              </ProtectedRoute>
            } />
            <Route path="/exit" element={
              <ProtectedRoute>
                <ExitPage setIsAuth={setIsAuth} />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <PopBrowse
            card={editingCard}
            onClose={() => setEditingCard(null)}
            onEdit={onCardEdit}
            onDelete={onCardDelete}
          />
          <PopNewCard
            isOpen={isNewCardPopupOpen}
            onClose={() => setIsNewCardPopupOpen(false)}
            onCardAdd={onCardAdd}
          />
          <Header
            onCardAdd={() => setIsNewCardPopupOpen(true)}
            onUserClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
          />
          <PopUser isOpen={isUserPopupOpen} />
          {isLoading ? (
            <div className="loading">Данные загружаются...</div>
          ) : (
            <Main
              cards={cards}
              onCardEdit={(card) => setEditingCard(card)}
              onCardDelete={onCardDelete}
            />
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;