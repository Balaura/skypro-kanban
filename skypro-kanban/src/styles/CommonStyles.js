import { css } from 'styled-components';

export const buttonStyles = css`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${props => props.theme.cardBackground};
  background-color: ${props => props.theme.primary};
  padding: 8px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

export const cardContainerStyles = css`
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 0px 10px 39px rgba(26, 56, 101, 0.21);
  border-radius: 10px;
`;