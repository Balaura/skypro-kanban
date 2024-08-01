import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ExitPageWrapper, ExitMessage, ButtonGroup, Button } from './ExitPageStyles';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
`;

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