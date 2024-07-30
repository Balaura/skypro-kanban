import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExitPageWrapper, ExitMessage, ButtonGroup, Button } from './ExitePageStyles';

function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleConfirmExit = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleCancelExit = () => {
    navigate(-1);
  };

  return (
    <ExitPageWrapper>
      <ExitMessage>Вы уверены, что хотите выйти?</ExitMessage>
      <ButtonGroup>
        <Button onClick={handleConfirmExit}>Да, выйти</Button>
        <Button onClick={handleCancelExit}>Отмена</Button>
      </ButtonGroup>
    </ExitPageWrapper>
  );
}

export default ExitPage;