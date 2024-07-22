import React from 'react';
import { useParams } from 'react-router-dom';

function CardPage() {
  const { id } = useParams();
  return <h1>Card Page for Card ID: {id}</h1>;
}

export default CardPage;