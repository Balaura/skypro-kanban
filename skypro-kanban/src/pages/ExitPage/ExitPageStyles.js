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