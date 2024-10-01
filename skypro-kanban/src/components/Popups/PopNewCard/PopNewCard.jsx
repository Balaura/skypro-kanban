import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { TaskContext } from '../../../contexts/TaskContext';
import { addTask } from '../../../API';
import * as styles from './PopNewCardStyles';

function PopNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [status, setStatus] = useState('Без статуса');
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCreateNewTask = async (e) => {
    e.preventDefault();
    setError('');
    if (!title.trim()) {
      setError('Название задачи обязательно');
      return;
    }
    try {
      const newTask = {
        title,
        description,
        date: format(selectedDate, 'yyyy-MM-dd'),
        status,
        topic
      };
      const response = await addTask(newTask);
      setTasks(prevTasks => [...prevTasks, response.tasks]);
      onClose();
      navigate('/', { state: { shouldRefetch: true } });
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Не удалось создать задачу. Попробуйте еще раз.');
    }
  };

  return (
    <styles.PopupWrapper>
      <styles.PopupContent>
        <styles.Title>Создание задачи</styles.Title>
        <styles.Form onSubmit={handleCreateNewTask}>
          <styles.InputGroup>
            <styles.Label htmlFor="taskTitle">Название задачи</styles.Label>
            <styles.Input
              id="taskTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите название задачи..."
              required
            />
          </styles.InputGroup>
          <styles.InputGroup>
            <styles.Label htmlFor="taskDescription">Описание задачи</styles.Label>
            <styles.TextArea
              id="taskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Введите описание задачи..."
            />
          </styles.InputGroup>
          <styles.InputGroup>
            <styles.Label htmlFor="taskStatus">Статус</styles.Label>
            <styles.Select
              id="taskStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Без статуса">Без статуса</option>
              <option value="Нужно сделать">Нужно сделать</option>
              <option value="В работе">В работе</option>
              <option value="Тестирование">Тестирование</option>
              <option value="Готово">Готово</option>
            </styles.Select>
          </styles.InputGroup>
          <styles.InputGroup>
            <styles.Label htmlFor="taskTopic">Тема</styles.Label>
            <styles.Select
              id="taskTopic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Без темы</option>
              <option value="Web Design">Web Design</option>
              <option value="Research">Research</option>
              <option value="Copywriting">Copywriting</option>
            </styles.Select>
          </styles.InputGroup>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ru}
          />
          <styles.SelectedDate>
            Выбранная дата: {format(selectedDate, 'dd.MM.yyyy', { locale: ru })}
          </styles.SelectedDate>
          {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
          <styles.Button type="submit">Создать задачу</styles.Button>
        </styles.Form>
        <styles.CloseButton onClick={onClose}>×</styles.CloseButton>
      </styles.PopupContent>
    </styles.PopupWrapper>
  );
}

export default PopNewCard;