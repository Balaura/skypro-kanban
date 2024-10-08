import { useState, useContext } from 'react';
import { format } from 'date-fns';
import { TaskContext } from '../../../contexts/TaskContext';
import { addTask } from '../../../API';
import * as styles from './PopNewCardStyles';
import Calendar from '../../Calendar/Calendar';
import { useUser } from '../../../contexts/UserContext';

function PopNewCard({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [status] = useState('Без статуса');
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');
  const { setTasks } = useContext(TaskContext);
  const { user } = useUser();

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
      const token = user.token;
      const response = await addTask(token, newTask);
      setTasks(response.tasks);
      onClose();
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
                  <styles.CalendarWrapper>
                    <Calendar
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                      readOnly={false}
                    />
                  </styles.CalendarWrapper>
                </styles.RightColumn>
              </styles.HorizontalLayout>
              <styles.FormBlock>
                <styles.Label htmlFor="taskTopic">Категория</styles.Label>
                <styles.TopicThemes>
                  {[
                    { value: "Web Design", label: "Web Design", themeKey: "web-design" },
                    { value: "Research", label: "Research", themeKey: "research" },
                    { value: "Copywriting", label: "Copywriting", themeKey: "copywriting" },
                  ].map(topicOption => (
                    <styles.TopicTheme
                      key={topicOption.value}
                      $themekey={topicOption.themeKey}
                      $isActive={topic === topicOption.value}
                      onClick={() => setTopic(topicOption.value)}
                    >
                      <p>{topicOption.label}</p>
                    </styles.TopicTheme>
                  ))}
                </styles.TopicThemes>
              </styles.FormBlock>
              {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
              <styles.ButtonGroup>
                <styles.SubmitButton type="submit">Создать задачу</styles.SubmitButton>
                <styles.CancelButton type="button" onClick={onClose}>Отменить</styles.CancelButton>
              </styles.ButtonGroup>
            </styles.Form>
          </styles.Content>
        </styles.Block>
      </styles.Container>
    </styles.PopBrowse>
  );
}

export default PopNewCard;