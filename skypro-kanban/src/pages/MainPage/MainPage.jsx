import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { getTasks } from '../../API';
import * as styles from './MainPageStyles';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import { TaskContext } from '../../contexts/TaskContext';

function MainPage({ isAuth, setIsAuth, toggleTheme, currentTheme }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    if (isAuth) {
      const fetchTasks = async () => {
        try {
          setIsLoading(true);
          const token = localStorage.getItem('token');
          const data = await getTasks(token);
          setTasks(data.tasks);
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
  }, [isAuth, navigate, location.state?.shouldRefetch]);

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
        <LoadingAnimation />
      ) : error ? (
        <styles.ErrorWrapper>{error}</styles.ErrorWrapper>
      ) : (
        <Main cards={tasks} />
      )}
    </styles.MainPageWrapper>
  );
}

export default MainPage;