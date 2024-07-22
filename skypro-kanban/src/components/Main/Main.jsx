import React from 'react';
import Column from '../Column/Column';
import { MainWrapper, MainBlock, MainContent } from './MainStyles';

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cards, onCardEdit, onCardDelete }) {
  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
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
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;