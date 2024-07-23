import React, { useState, useEffect } from 'react';
import Calendar from '../../Calendar/Calendar';
import {
  PopupWrapper,
  PopupContent,
  TopBlock,
  Title,
  StatusBlock,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  Form,
  TextArea,
  ButtonGroup,
  Button
} from './PopBrowseStyles';

function PopBrowse({ card, onClose, onEdit, onDelete }) {
  const [editedCard, setEditedCard] = useState(card);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedCard(card);
  }, [card]);

  if (!card) return null;

  const handleSave = () => {
    if (onEdit) onEdit(editedCard);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(card.id);
    onClose();
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <TopBlock>
          <Title>{isEditing ? 'Редактирование задачи' : 'Просмотр задачи'}</Title>
        </TopBlock>
        <StatusBlock>
          <StatusTitle>Статус</StatusTitle>
          <StatusThemes>
            {['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'].map(status => (
              <StatusTheme
                key={status}
                isActive={editedCard.status === status}
                onClick={() => isEditing && setEditedCard({...editedCard, status})}
              >
                {status}
              </StatusTheme>
            ))}
          </StatusThemes>
        </StatusBlock>
        <Form>
          <TextArea
            value={editedCard.description}
            onChange={(e) => isEditing && setEditedCard({...editedCard, description: e.target.value})}
            readOnly={!isEditing}
            placeholder="Введите описание задачи..."
          />
        </Form>
        <Calendar />
        <ButtonGroup>
          {isEditing ? (
            <>
              <Button primary onClick={handleSave}>Сохранить</Button>
              <Button onClick={() => setIsEditing(false)}>Отменить</Button>
              <Button onClick={handleDelete}>Удалить задачу</Button>
            </>
          ) : (
            <>
              <Button primary onClick={() => setIsEditing(true)}>Редактировать задачу</Button>
              <Button onClick={handleDelete}>Удалить задачу</Button>
            </>
          )}
          <Button onClick={onClose}>Закрыть</Button>
        </ButtonGroup>
      </PopupContent>
    </PopupWrapper>
  );
}

export default PopBrowse;