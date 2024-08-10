import React, { useState, useContext } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { TaskContext } from '../../contexts/TaskContext';
import { addTask } from '../../API';
import * as styles from './PopNewCardStyles';

function PopNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { tasks, setTasks } = useContext(TaskContext);

  if (!isOpen) return null;

  const handleCreateNewTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        title,
        description,
        date: format(selectedDate, 'yyyy-MM-dd'),
        status: "Без статуса"
      };
      const response = await addTask(newTask);
      setTasks([...tasks, response.task]);
      onClose();
    } catch (error) {
      console.error('Error adding task:', error);
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
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ru}
          />
          <styles.SelectedDate>
            Выбранная дата: {format(selectedDate, 'dd.MM.yyyy', { locale: ru })}
          </styles.SelectedDate>
          <styles.Button type="submit">Создать задачу</styles.Button>
        </styles.Form>
      </styles.PopupContent>
    </styles.PopupWrapper>
  );
}

export default PopNewCard;