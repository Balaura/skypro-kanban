import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { TaskContext } from '../../../contexts/TaskContext';
import { addTask } from '../../../API';
import * as styles from './PopNewCardStyles';

function PopNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const { tasks, setTasks } = React.useContext(TaskContext);

  if (!isOpen) return null;

  const handleCreateNewTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        title,
        description,
        date: format(selectedDate, 'yyyy-MM-dd'),
        topic: category,
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
            <styles.Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название задачи"
              required
            />
          </styles.InputGroup>
          <styles.InputGroup>
            <styles.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание задачи"
            />
          </styles.InputGroup>
          <styles.CategoryContainer>
            <styles.CategoryButton
              type="button"
              color="#FFE4C2"
              isSelected={category === 'Web Design'}
              onClick={() => setCategory('Web Design')}
            >
              Web Design
            </styles.CategoryButton>
            <styles.CategoryButton
              type="button"
              color="#B4FDD1"
              isSelected={category === 'Research'}
              onClick={() => setCategory('Research')}
            >
              Research
            </styles.CategoryButton>
            <styles.CategoryButton
              type="button"
              color="#E9D4FF"
              isSelected={category === 'Copywriting'}
              onClick={() => setCategory('Copywriting')}
            >
              Copywriting
            </styles.CategoryButton>
          </styles.CategoryContainer>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={ru}
          />
          <styles.SelectedDate>
            Выбранная дата: {format(selectedDate, 'dd.MM.yyyy', { locale: ru })}
          </styles.SelectedDate>
          <styles.ButtonContainer>
            <styles.Button type="button" onClick={onClose}>Отменить</styles.Button>
            <styles.Button type="submit" primary>Создать задачу</styles.Button>
          </styles.ButtonContainer>
        </styles.Form>
      </styles.PopupContent>
    </styles.PopupWrapper>
  );
}

export default PopNewCard;