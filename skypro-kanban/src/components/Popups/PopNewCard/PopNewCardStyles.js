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

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};
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

export const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CategoryButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? props.color : 'transparent'};
  color: ${props => props.isSelected ? 'white' : props.color};
  border: 1px solid ${props => props.color};
`;

export const SelectedDate = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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

export const Label = styled.label`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 10px;
`;