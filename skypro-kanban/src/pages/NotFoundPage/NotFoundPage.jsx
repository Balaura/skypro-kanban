import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './NotFoundPageStyles';

const NotFoundPage = () => {
  return (
    <styles.NotFoundWrapper>
      <styles.Title>404</styles.Title>
      <styles.Message>Страница не найдена</styles.Message>
      <styles.Link to="/" component={StyledLink}>Вернуться на главную</styles.Link>
    </styles.NotFoundWrapper>
  );
};

export default NotFoundPage;