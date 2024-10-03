import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as styles from './RegisterPageStyles';
import { registerUser } from '../../API';

const RegisterPage = () => {
const [login, setLogin] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (login.length < 3) {
      setError('Логин должен содержать хотя бы 3 символа');
      return;
    }

    setIsLoading(true);
    try {
      await registerUser(login, name, password);
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Ошибка при регистрации. Попробуйте другой логин.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <styles.RegisterWrapper>
      <styles.RegisterForm onSubmit={handleSubmit}>
        <styles.Title>Регистрация</styles.Title>
        <styles.InputWrapper>
          <styles.Input
            name="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
            required
            minLength={3}
          />
        </styles.InputWrapper>
        <styles.InputWrapper>
          <styles.Input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            required
          />
        </styles.InputWrapper>
        <styles.InputWrapper>
          <styles.Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            required
          />
        </styles.InputWrapper>
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <styles.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
        </styles.Button>
        <styles.LinkWrapper>
          <p>Уже есть аккаунт?</p>
          <Link to="/login"><u>Войдите здесь</u></Link>
        </styles.LinkWrapper>
      </styles.RegisterForm>
    </styles.RegisterWrapper>
  );
};

export default RegisterPage;