import { css } from 'styled-components';
import { themeColors } from './Themes';

export const buttonStyles = css`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${themeColors.cardBackground};
  background-color: ${themeColors.primary};
  padding: 8px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${themeColors.secondary};
  }
`;


export const cardContainerStyles = css`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;