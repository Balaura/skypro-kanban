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
    <styles.PopBrowse>
      <styles.Container>
        <styles.Block>
          <styles.Content>
            <styles.TopBlock>
              <styles.Title>Создание задачи</styles.Title>
            </styles.TopBlock>
            <styles.Form onSubmit={handleCreateNewTask}>
              <styles.HorizontalLayout>
                <styles.LeftColumn>
                  <styles.FormBlock>
                    <styles.Label htmlFor="taskTitle">Название задачи</styles.Label>
                    <styles.Input
                      id="taskTitle"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Введите название задачи..."
                      required
                    />
                  </styles.FormBlock>
                  <styles.FormBlock>
                    <styles.Label htmlFor="taskDescription">Описание задачи</styles.Label>
                    <styles.TextArea
                      id="taskDescription"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Введите описание задачи..."
                    />
                  </styles.FormBlock>
                </styles.LeftColumn>
                <styles.RightColumn>
                  <styles.FormBlock>
                    <styles.Label htmlFor="taskStatus">Статус</styles.Label>
                    <styles.StatusThemes>
                      {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map(statusOption => (
                        <styles.StatusTheme
                          key={statusOption}
                          className={status === statusOption ? '_gray' : ''}
                          onClick={() => setStatus(statusOption)}
                        >
                          <p>{statusOption}</p>
                        </styles.StatusTheme>
                      ))}
                    </styles.StatusThemes>
                  </styles.FormBlock>
                  <styles.FormBlock>
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
                  </styles.FormBlock>
                  <styles.CalendarWrapper>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={ru}
                    />
                    <styles.SelectedDate>
                      Выбранная дата: {format(selectedDate, 'dd.MM.yyyy', { locale: ru })}
                    </styles.SelectedDate>
                  </styles.CalendarWrapper>
                </styles.RightColumn>
              </styles.HorizontalLayout>
              {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
              <styles.ButtonGroup>
                <styles.Button type="submit" className="_btn-bg _hover01">Создать задачу</styles.Button>
                <styles.Button type="button" className="_btn-bor _hover03" onClick={onClose}>Отменить</styles.Button>
              </styles.ButtonGroup>
            </styles.Form>
          </styles.Content>
        </styles.Block>
      </styles.Container>
    </styles.PopBrowse>
  );
}

export default PopNewCard;