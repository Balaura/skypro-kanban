import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

function LoginPage({ setIsAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Проверка учетных данных для 4 ДЗ
  const checkCredentials = (username, password) => {
    // Потом для ДЗ 5 запрос к API
    return username === 'admin' && password === 'password';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkCredentials(username, password)) {
      setIsAuth(true);
      navigate('/');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Вход</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        <Button type="submit">Войти</Button>
        <p>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </LoginForm>
    </LoginWrapper>
  );
}

export default LoginPage;