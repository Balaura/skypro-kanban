import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PopBrowse from '../../components/Popups/PopBrowse/PopBrowse';
import PopNewCard from '../../components/Popups/PopNewCard/PopNewCard';
import { cardList } from '../../../data';
import './MainPageStyles';

function MainPage({ toggleTheme }) {
     const [cards, setCards] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const [isNewCardPopupOpen, setIsNewCardPopupOpen] = useState(false);
     const [editingCard, setEditingCard] = useState(null);

     useEffect(() => {
          setTimeout(() => {
               setCards(cardList);
               setIsLoading(false);
          }, 2000);
     }, []);

     const onCardAdd = (newCard) => {
          setCards([...cards, newCard]);
     };

     const onCardEdit = (editedCard) => {
          setCards(cards.map(card => card.id === editedCard.id ? editedCard : card));
          setEditingCard(null);
     };

     const onCardDelete = (cardId) => {
          setCards(cards.filter(card => card.id !== cardId));
     };

     return (
          <MainPageWrapper>
               <Header onCardAdd={() => setIsNewCardPopupOpen(true)} toggleTheme={toggleTheme} />
               {isLoading ? (
                    <div className="loading">Данные загружаются...</div>
               ) : (
                    <Main
                         cards={cards}
                         onCardEdit={(card) => setEditingCard(card)}
                         onCardDelete={onCardDelete}
                    />
               )}
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
          </MainPageWrapper>
     );
}

export default MainPage;