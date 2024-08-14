import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar';
import { getTasks, editTask, deleteTask } from '../../API';
import * as styles from './PopBrowseStyles';

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState({});

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Error fetching card: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.task) {
          setCard(data.task);
          setEditedCard(data.task);
        } else {
          console.error("Нет задачи с таким ID");
        }
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchCard();
  }, [id]);

  const handleClose = () => {
    navigate('/');
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await editTask(token, id, editedCard);
      console.log('Updated Task Response:', response);
      setCard(editedCard);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await deleteTask(token, id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <styles.PopBrowse id="popBrowse">
      <styles.Container>
        <styles.Block>
          <styles.Content>
            <styles.TopBlock>
              <styles.Title>{isEditing ? 'Редактирование задачи' : card.title}</styles.Title>
              <styles.Theme className={`theme-top _orange ${card.theme === 'Web Design' ? '_active-category' : ''}`}>
                <p className="_orange">{card.theme}</p>
              </styles.Theme>
            </styles.TopBlock>
            <styles.Status>
              <styles.StatusTitle>Статус</styles.StatusTitle>
              <styles.StatusThemes>
                {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map(status => (
                  <styles.StatusTheme
                    key={status}
                    className={card.status === status ? '_gray' : '_hide'}
                    onClick={() => isEditing && setEditedCard({ ...editedCard, status })}
                  >
                    <p className={card.status === status ? '_gray' : ''}>{status}</p>
                  </styles.StatusTheme>
                ))}
              </styles.StatusThemes>
            </styles.Status>
            <styles.Wrapper>
              <styles.Form>
                <styles.FormBlock>
                  <styles.Label htmlFor="textArea01">Описание задачи</styles.Label>
                  <styles.TextArea
                    id="textArea01"
                    value={editedCard.description || ''}
                    onChange={(e) => isEditing && setEditedCard({ ...editedCard, description: e.target.value })}
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                  />
                </styles.FormBlock>
              </styles.Form>
              <Calendar />
            </styles.Wrapper>
            <styles.ThemeDownCategories className="theme-down">
              <styles.CategoriesTitle>Категория</styles.CategoriesTitle>
              <styles.CategoryTheme className={`_orange ${card.theme === 'Web Design' ? '_active-category' : ''}`}>
                <p className="_orange">{card.theme}</p>
              </styles.CategoryTheme>
            </styles.ThemeDownCategories>
            {isEditing ? (
              <styles.ButtonEdit>
                <styles.ButtonGroup>
                  <styles.Button className="_btn-bg _hover01" onClick={handleSave}>Сохранить</styles.Button>
                  <styles.Button className="_btn-bor _hover03" onClick={() => setIsEditing(false)}>Отменить</styles.Button>
                  <styles.Button className="_btn-bor _hover03" onClick={handleDelete}>Удалить задачу</styles.Button>
                </styles.ButtonGroup>
                <styles.Button className="_btn-bg _hover01" onClick={handleClose}>Закрыть</styles.Button>
              </styles.ButtonEdit>
            ) : (
              <styles.ButtonBrowse>
                <styles.ButtonGroup>
                  <styles.Button className="_btn-bor _hover03" onClick={() => setIsEditing(true)}>Редактировать задачу</styles.Button>
                  <styles.Button className="_btn-bor _hover03" onClick={handleDelete}>Удалить задачу</styles.Button>
                </styles.ButtonGroup>
                <styles.Button className="_btn-bg _hover01" onClick={handleClose}>Закрыть</styles.Button>
              </styles.ButtonBrowse>
            )}
          </styles.Content>
        </styles.Block>
      </styles.Container>
    </styles.PopBrowse>
  );
}

export default PopBrowse;
