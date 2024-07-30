import React from 'react';
import Column from '../Column/Column';
import '../../App.css';

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cards }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={cards.filter((card) => card.status.toLowerCase() === status.toLowerCase())}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
