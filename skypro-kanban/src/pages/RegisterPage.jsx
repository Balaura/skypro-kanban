import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterWrapper, RegisterForm, Title, Input, Button } from '../styles/RegisterPageStyles';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика регистрации пользователя 5 домашка
    console.log('Регистрация:', email, password);
    navigate('/login');
  };

  return (
    <RegisterWrapper>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Регистрация</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        <Button type="submit">Зарегистрироваться</Button>
        <p>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </RegisterForm>
    </RegisterWrapper>
  );
}

export default RegisterPage;