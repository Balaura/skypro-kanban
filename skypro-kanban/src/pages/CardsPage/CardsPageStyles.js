import styled from 'styled-components';

export const CardPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.background};
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 630px;
  padding: 25px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 10px 39px rgba(26, 56, 101, 0.21);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
  flex-grow: 1;
  margin-right: 15px;
`;

export const CardTopic = styled.span`
  padding: 5px 14px;
  background-color: ${props => props.theme.topicStyles[props.topic]?.backgroundColor || props.theme.topicStyles.default.backgroundColor};
  color: ${props => props.theme.topicStyles[props.topic]?.color || props.theme.topicStyles.default.color};
  border-radius: 24px;
  font-size: 14px;
`;

export const CardStatus = styled.div`
  margin-bottom: 15px;
  color: ${props => props.theme.textSecondary};
`;

export const CardDescription = styled.p`
  margin-bottom: 15px;
  color: ${props => props.theme.textPrimary};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardDate = styled.span`
  color: ${props => props.theme.textSecondary};
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const EditButton = styled(Button)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};
  border: none;
`;

export const SaveButton = styled(EditButton)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.cardBackground};
  border: none;
`;

export const DeleteButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.textPrimary};
`;

export const Select = styled.select`
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

export const CalendarWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: ${props => props.theme.textPrimary};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  padding: 0 20px;
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 24px;
  font-size: 14px;
  background-color: ${props => {
    switch (props.$status) {
      case 'Без статуса': return '#94A6BE';
      case 'Нужно сделать': return '#FFE4C2';
      case 'В работе': return '#B4FDD1';
      case 'Тестирование': return '#E9D4FF';
      case 'Готово': return '#B4FDD1';
      default: return '#94A6BE';
    }
  }};
  color: ${props => props.theme.cardBackground};
`;

