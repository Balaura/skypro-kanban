import styled from 'styled-components';

export const ExitPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExitMessage = styled.h2`
  color: ${props => props.theme.textPrimary};
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};
  &:hover {
    opacity: 0.8;
  }

  &:nth-child(2) {
    background-color: transparent;
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  }
`;

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
`;