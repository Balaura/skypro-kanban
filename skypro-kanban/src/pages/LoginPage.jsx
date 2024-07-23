import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginWrapper, LoginForm, Title, Input, Button, ErrorMessage, LinkWrapper } from '../styles/LoginPageStyles';

function LoginPage({ setIsAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет проверка вход с API в 5 домашке
    if ((email === 'user@example.com' && password === 'password') || (email === '1@1' && password === '1')) {
      setIsAuth(true);
      navigate('/');
    } else {
      setError('Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.');
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Вход</Title>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Эл. почта"
          required
          error={error}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
          error={error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" error={error}> Войти </Button>
        <LinkWrapper>
          <p>Нужно зарегистрироваться?</p><Link to="/register">
            <u>Регистрируйтесь здесь</u>
          </Link>
        </LinkWrapper>
      </LoginForm>
    </LoginWrapper>
  );
}

export default LoginPage;