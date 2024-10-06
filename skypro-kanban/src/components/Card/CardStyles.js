import styled from 'styled-components';
import { cardContainerStyles } from '../../styles/CommonStyles';

export const CardWrapper = styled.div`
  ${cardContainerStyles}
  width: 220px;
  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 15px 13px 19px;
  margin-bottom: 15px;
  input, textarea, button {
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
    }
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic, theme }) =>
    theme.topicStyles[$topic]?.backgroundColor || theme.topicStyles.default.backgroundColor};
`;

export const ThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $topic, theme }) =>
    theme.topicStyles[$topic]?.color || theme.topicStyles.default.color};
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const ButtonDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props => props.theme.textSecondary};
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  color: ${props => props.theme.textPrimary};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  color: ${props => props.theme.textSecondary};
  letter-spacing: 0.2px;
  input, textarea, button {
    &:focus {
      outline: none;
      border-color: ${props => props.theme.primary};
    }
  }

`;
export const CalendarIcon = styled.svg`
  width: 13px;
  height: 13px;
  fill: ${props => props.theme.textSecondary};
  margin-right: 6px;
`;