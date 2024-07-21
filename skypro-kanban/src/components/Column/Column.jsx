import React from 'react';
import Card from '../Card/Card';
import '../../App.css';

function Column({ title, tasks }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((task) => (
          <div className="cards__item" key={task.id}>
            <Card
              title={task.title}
              topic={task.topic}
              date={task.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
