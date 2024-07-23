import React from 'react';
import { useParams } from 'react-router-dom';
import { CardPageWrapper, Title, CardInfo, CardContainer } from '../styles/CardPageStyles';

function CardPage() {
  const { id } = useParams();

  return (
    <CardPageWrapper>
      <CardContainer>
        <Title>Карточка задачи</Title>
        <CardInfo>ID задачи: {id}</CardInfo>
        {/* В 6 домашке будет реализована */}
      </CardContainer>
    </CardPageWrapper>
  );
}

export default CardPage;