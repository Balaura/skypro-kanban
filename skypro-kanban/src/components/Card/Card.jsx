import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import * as styles from './CardStyles';

const getTopicClassName = (topic) => {
  switch ((topic || '').toLowerCase()) {
    case 'web design': return 'web-design';
    case 'research': return 'research';
    case 'copywriting': return 'copywriting';
    default: return 'default';
  }
};

function Card({ id, title, topic = '', date }) {
  const navigate = useNavigate();
  const location = useLocation();
  const topicClassName = getTopicClassName(topic);

  const handleCardClick = () => {
    navigate(`/card/${id}`, { state: { background: location } });
  };

  const formattedDate = format(new Date(date), 'dd.MM.yyyy', { locale: ru });

  return (
    <styles.CardWrapper>
      <styles.CardGroup>
        <styles.CardTheme $topic={topicClassName}>
          <styles.ThemeText $topic={topicClassName}>{topic}</styles.ThemeText>
        </styles.CardTheme>
        <styles.CardButton onClick={handleCardClick}>
          <styles.ButtonDot />
          <styles.ButtonDot />
          <styles.ButtonDot />
        </styles.CardButton>
      </styles.CardGroup>
      <styles.CardContent>
        <styles.CardTitle>{title}</styles.CardTitle>
        <styles.CardDate>
          <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
            <g clipPath="url(#clip0_1_415)">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_415">
                <rect width={13} height={13} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <styles.DateText>{formattedDate}</styles.DateText>
        </styles.CardDate>
      </styles.CardContent>
    </styles.CardWrapper>
  );
}

export default Card;