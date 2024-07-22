import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function MainPage({ cards, onCardAdd }) {
     return (
          <>
               <Header onCardAdd={onCardAdd} />
               <Main cards={cards} />
          </>
     );
}

export default MainPage;