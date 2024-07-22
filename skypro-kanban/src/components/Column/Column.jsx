import React from 'react';
import Card from '../Card/Card';
import { ColumnWrapper, ColumnTitle, CardsContainer } from './ColumnStyles';

function Column({ title, tasks }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            topic={task.topic}
            date={task.date}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;