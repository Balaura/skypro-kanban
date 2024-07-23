import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  padding: 40px 30px;
  width: 630px;
  max-width: 90%;
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
`;

export const StatusBlock = styled.div`
  margin-bottom: 20px;
`;

export const StatusTitle = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${props => props.theme.textSecondary};
`;

export const StatusThemes = styled.div`
  display: flex;
  gap: 10px;
`;

export const StatusTheme = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  background-color: ${props => props.isActive ? props.theme.primary : 'transparent'};
  color: ${props => props.isActive ? props.theme.cardBackground : props.theme.textPrimary};
  border: 1px solid ${props => props.isActive ? props.theme.primary : props.theme.secondary};
  cursor: pointer;
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};
  resize: vertical;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${props => props.primary ? props.theme.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.cardBackground : props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;