import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as styles from './LoginPageStyles';

function LoginPage({ setIsAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('token', 'dummy-token');
    navigate('/');
  };

  return (
    <styles.LoginWrapper>
      <styles.LoginForm onSubmit={handleSubmit}>
        <styles.Title>Вход</styles.Title>
        <styles.Input
          type="email"
          value= {email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Эл. почта"
          required
        />
        <styles.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        <styles.Button type="submit">
          Войти
        </styles.Button>
        <styles.LinkWrapper>
          <p>Нужно зарегистрироваться?</p>
          <Link to="/register">
            <u>Регистрируйтесь здесь</u>
          </Link>
        </styles.LinkWrapper>
      </styles.LoginForm>
    </styles.LoginWrapper>
  );
}

export default LoginPage;