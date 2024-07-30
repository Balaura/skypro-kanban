import styled from 'styled-components';

export const ExitPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

export const ExitMessage = styled.h2`
  color: ${props => props.theme.textPrimary};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};

  &:hover {
    opacity: 0.8;
  }
`;