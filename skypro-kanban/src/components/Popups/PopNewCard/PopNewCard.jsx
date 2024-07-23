import React, { useState } from 'react';
import Calendar from '../../Calendar/Calendar';
import {
  PopupWrapper,
  PopupContent,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Button
} from '../PopNewCard/PopNewCardStyles';

function PopNewCard({ isOpen, onClose, onCardAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleCreateNewTask = (e) => {
    e.preventDefault();
    onCardAdd({
      id: Date.now(),
      title: title,
      description: description,
      date: new Date().toLocaleDateString('ru-RU'),
      status: "Без статуса"
    });
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <Title>Создание задачи</Title>
        <Form onSubmit={handleCreateNewTask}>
          <InputGroup>
            <Label htmlFor="taskTitle">Название задачи</Label>
            <Input
              id="taskTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите название задачи..."
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="taskDescription">Описание задачи</Label>
            <TextArea
              id="taskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Введите описание задачи..."
            />
          </InputGroup>
          <Calendar />
          <Button type="submit">Создать задачу</Button>
        </Form>
      </PopupContent>
    </PopupWrapper>
  );
}

export default PopNewCard;
