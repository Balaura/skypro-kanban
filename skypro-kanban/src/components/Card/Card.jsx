import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
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
  DateText
} from './CardStyles';

function Card({ id, title, topic = '', date }) {
  const navigate = useNavigate();

  const getTopicClassName = (topic) => {
    switch ((topic || '').toLowerCase()) {
      case 'web design': return 'web-design';
      case 'research': return 'research';
      case 'copywriting': return 'copywriting';
      default: return 'default';
    }
  };

  const topicClassName = getTopicClassName(topic);

  const handleCardClick = () => {
    navigate(`/card/${id}`);
  };

  const formattedDate = format(new Date(date), 'dd.MM.yyyy', { locale: ru });

  return (
    <CardWrapper>
      <CardGroup>
        <CardTheme $topic={topicClassName}>
          <ThemeText $topic={topicClassName}>{topic}</ThemeText>
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