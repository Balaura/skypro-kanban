import React from 'react';
import Column from '../Column/Column';
import { MainWrapper, MainContainer, MainContent } from './MainStyles';

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cards, onCardEdit, onCardDelete }) {
  console.log(cards);
  return (
    <MainWrapper>
      <MainContainer>
        <MainContent>
          {statusList.map((status) => (
            <Column
              key={status}
              title={status}
              tasks={cards.filter((card) => (card.status || '').toLowerCase() === status.toLowerCase())}
              onCardEdit={onCardEdit}
              onCardDelete={onCardDelete}
            />
          ))}
        </MainContent>
      </MainContainer>
    </MainWrapper>
  );
}

export default Main;