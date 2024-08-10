import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import * as styles from './CardsPageStyles';
import { DayPicker } from 'react-day-picker';
import { getTaskById, updateTask, deleteTask, createTask } from '../../API';

function CardsPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setIsLoading(true);
        const data = await getTaskById(id);
        setTask({
          ...data.task,
          date: data.task.date ? new Date(data.task.date) : null
        });
      } catch (err) {
        console.error('Error fetching task:', err);
        setError(err.message || 'Не удалось загрузить задачу. Попробуйте позже.');
        if (err.message === 'Отсутствует токен авторизации') {
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      let updatedTask;
      if (id === 'new') {
        const newTaskData = {
          title: task.title,
          description: task.description,
          topic: task.topic,
          status: task.status,
          date: task.date ? new Date(task.date).toISOString() : null,
        };
        console.log('Отправка новой задачи:', newTaskData);
        const response = await createTask(newTaskData);
        console.log('Ответ от createTask:', response);
        navigate(`/`);
      } else {
        const updatedTaskData = {
          ...task,
          date: task.date ? new Date(task.date).toISOString() : null,
        };
        updatedTask = await updateTask(id, updatedTaskData);
      }
      setIsEditing(false);
      setTask(updatedTask);
    } catch (err) {
      console.error('Error saving task:', err);
      setError(`Не удалось сохранить задачу. ${err.message}`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      navigate('/');
    } catch (err) {
      console.error('Error deleting task:', err);
      setError('Не удалось удалить задачу. Попробуйте позже.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      setTask(prev => ({ ...prev, [name]: value ? new Date(value) : null }));
    } else {
      setTask(prev => ({ ...prev, [name]: value }));
    }
  };

  // const handleDateSelect = (date) => {
  //   setTask(prev => ({ ...prev, date: date }));
  // };

  if (isLoading) return <styles.LoadingWrapper>Загрузка...</styles.LoadingWrapper>;
  if (error) return <styles.ErrorWrapper>{error}</styles.ErrorWrapper>;
  if (!task) return <styles.ErrorWrapper>Задача не найдена</styles.ErrorWrapper>;

  return (
    <styles.CardPageWrapper>
      <styles.CardContainer>
        <styles.CardHeader>
          <styles.CardTitle>
            {isEditing ? (
              <styles.Input
                name="title"
                value={task.title}
                onChange={handleInputChange}
                placeholder="Название задачи"
              />
            ) : (
              task.title
            )}
          </styles.CardTitle>
          <styles.CardStatus>
            {isEditing ? (
              <styles.Select
                name="status"
                value={task.status}
                onChange={handleInputChange}
              >
                <option value="Без статуса">Без статуса</option>
                <option value="Нужно сделать">Нужно сделать</option>
                <option value="В работе">В работе</option>
                <option value="Тестирование">Тестирование</option>
                <option value="Готово">Готово</option>
              </styles.Select>
            ) : (
              <styles.StatusBadge $status={task.status}>{task.status}</styles.StatusBadge>
            )}
          </styles.CardStatus>
        </styles.CardHeader>
        <styles.CardDescription>
          {isEditing ? (
            <styles.TextArea
              name="description"
              value={task.description}
              onChange={handleInputChange}
              placeholder="Описание задачи"
            />
          ) : (
            task.description
          )}
        </styles.CardDescription>
        {isEditing && (
          <styles.CardTopic>
            <styles.Select
              name="topic"
              value={task.topic}
              onChange={handleInputChange}
            >
              <option value="">Без темы</option>
              <option value="Web Design">Web Design</option>
              <option value="Research">Research</option>
              <option value="Copywriting">Copywriting</option>
            </styles.Select>
          </styles.CardTopic>
        )}
        {isEditing && (
          <styles.CalendarWrapper>
            <DayPicker
              mode="single"
              selected={task.date ? new Date(task.date) : undefined}
              onSelect={(date) => handleInputChange({ target: { name: 'date', value: date ? date.toISOString() : null } })}
              locale={ru}
            />
          </styles.CalendarWrapper>
        )}
        <styles.CardFooter>
          <styles.CardDate>
            {task.date ? format(new Date(task.date), 'dd.MM.yyyy', { locale: ru }) : 'Дата не указана'}
          </styles.CardDate>
          <styles.CardButtons>
            {isEditing ? (
              <styles.SaveButton onClick={handleSave}>Сохранить</styles.SaveButton>
            ) : (
              <styles.EditButton onClick={handleEdit}>Редактировать</styles.EditButton>
            )}
            <styles.DeleteButton onClick={handleDelete}>Удалить</styles.DeleteButton>
          </styles.CardButtons>
        </styles.CardFooter>
      </styles.CardContainer>
    </styles.CardPageWrapper>
  );
}

export default CardsPage;