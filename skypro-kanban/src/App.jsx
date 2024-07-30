
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/Popups/PopBrowse/PopBrowse';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopUser from './components/Popups/PopUser/PopUser';
import { cardList } from '../data';
import GlobalStyle from './styles/GlobalStyles';
import { themeColors } from './styles/Themes';
import { LoadingWrapper, wrapperStyles } from "./styles/CommonStyles";
import styled from 'styled-components';

const AppWrapper = styled.div`
  ${wrapperStyles}
`;

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
  }, []);

  function onCardAdd() {
    const newCard = {
      id: cards.length + 1,
      topic: "Research",
      title: "Название задачи",
      date: new Date().toLocaleDateString('ru-RU'),
      status: "Без статуса"
    };
    setCards([...cards, newCard]);
  }
  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <AppWrapper>
        <PopBrowse />
        <PopNewCard onCardAdd={onCardAdd} />
        <Header onCardAdd={onCardAdd} onUserClick={() => setIsUserPopupOpen(!isUserPopupOpen)} />
        <PopUser isOpen={isUserPopupOpen} />
        {isLoading ? (
          <LoadingWrapper>Данные загружаются...</LoadingWrapper>
        ) : (
          <Main cards={cards} />
        )}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;