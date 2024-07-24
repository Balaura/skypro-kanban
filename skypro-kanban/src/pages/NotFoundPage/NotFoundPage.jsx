import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPageStyles';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Title>404</Title>
      <Message>Страница не найдена</Message>
      <Link to="/" component={StyledLink}>Вернуться на главную</Link>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;