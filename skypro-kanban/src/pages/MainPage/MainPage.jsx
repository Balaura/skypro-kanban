import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { getTasks } from '../../API';
import * as styles from './MainPageStyles';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import { TaskContext } from '../../contexts/TaskContext';
import { useUser } from '../../contexts/UserContext';
import { AppRoutesObj } from '../../routes/routes';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TaskContext);
  const { user, updateUser } = useUser();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user || !user.token) {
        navigate(AppRoutesObj.LOGIN);
        return;
      }

      try {
        setIsLoading(true);
        const data = await getTasks(user.token);
        setTasks(data.tasks);
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError('Не удалось загрузить данные. Пожалуйста, попробуйте позже или обратитесь в службу поддержки.');
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [user, navigate, setTasks]);

  const handleLogout = () => {
    updateUser(null);
    navigate(AppRoutesObj.LOGIN);
  };

  return (
    <styles.MainPageWrapper>
      <Header />
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