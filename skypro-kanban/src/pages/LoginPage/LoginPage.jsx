import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as styles from './LoginPageStyles';
import { loginUser } from '../../API';
import { useUser } from '../../contexts/UserContext';
import { AppRoutesObj } from '../../routes/routes';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const data = await loginUser(login, password);
      updateUser({
        name: data.user.name,
        login: data.user.login,
        token: data.user.token,
      });
      navigate(AppRoutesObj.HOME);
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Произошла ошибка при входе. Пожалуйста, попробуйте ещё раз.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <styles.LoginWrapper>
      <styles.LoginForm onSubmit={handleSubmit}>
        <styles.Title>Вход</styles.Title>
        <styles.Input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
          required
        />
        <styles.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        <styles.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Войти'}
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