import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ExitPageWrapper, ExitMessage, ButtonGroup, Button, ModalOverlay, ModalContent } from './ExitPageStyles';


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
    <ModalOverlay>
      <ModalContent>
        <ExitPageWrapper>
          <ExitMessage>Выйти из аккаунта?</ExitMessage>
          <ButtonGroup>
            <Button onClick={handleConfirmExit}>Да, выйти</Button>
            <Button onClick={handleCancelExit}>Нет, остаться</Button>
          </ButtonGroup>
        </ExitPageWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ExitPage;