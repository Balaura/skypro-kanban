import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { getTasks } from '../../API';
import * as styles from './MainPageStyles';

function MainPage({ isAuth, setIsAuth, toggleTheme, currentTheme }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      const fetchTasks = async () => {
        try {
          setIsLoading(true);
          const token = localStorage.getItem('token');
          const data = await getTasks(token);
          setCards(data.tasks);
        } catch (err) {
          setError('Не удалось загрузить данные, попробуйте позже');
        } finally {
          setIsLoading(false);
        }
      };
      fetchTasks();
    } else {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <styles.MainPageWrapper>
      <Header
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
        handleLogout={handleLogout}
        setIsAuth={setIsAuth}
      />
      {isLoading ? (
        <styles.LoadingWrapper>Загрузка...</styles.LoadingWrapper>
      ) : error ? (
        <styles.ErrorWrapper>{error}</styles.ErrorWrapper>
      ) : (
        <Main cards={cards} />
      )}
    </styles.MainPageWrapper>
  );
}

export default MainPage;