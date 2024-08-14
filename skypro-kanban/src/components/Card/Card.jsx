import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CardWrapper,
  CardGroup,
  CardTheme,
  ThemeText,
  CardButton,
  ButtonDot,
  CardContent,
  CardTitle,
  CardDate,
  CalendarIcon,
  DateText,
} from './CardStyles';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

function Card({ id, title, topic = '', date }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    navigate(`/card/${id}`, { state: { background: location } });
  };

  const formattedDate = format(new Date(date), 'dd.MM.yyyy', { locale: ru });

  return (
    <CardWrapper>
      <CardGroup>
        <CardTheme>
          <ThemeText>{topic}</ThemeText>
        </CardTheme>
        <CardButton onClick={handleCardClick}>
          <ButtonDot />
          <ButtonDot />
          <ButtonDot />
        </CardButton>
      </CardGroup>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDate>
          <CalendarIcon />
          <DateText>{formattedDate}</DateText>
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;