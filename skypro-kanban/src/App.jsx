import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/Popups/PopBrowse/PopBrowse';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopUser from './components/Popups/PopUser/PopUser';
import { cardList } from '../data';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Эмуляция загрузки данных
    setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
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
    <div className="wrapper">
      <PopBrowse />
      <PopNewCard onCardAdd={onCardAdd} />
      <PopUser />
      <Header onCardAdd={onCardAdd} />
      {isLoading ? (
        <div className="loading">Данные загружаются...</div>
      ) : (
        <Main cards={cards} />
      )}
    </div>
  )
}

export default App;
