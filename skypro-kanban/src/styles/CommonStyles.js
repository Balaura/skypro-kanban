import { themeColors } from './Themes';
import styled, { css } from 'styled-components';

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

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: #333;
`;

export const wrapperStyles = css`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;

export const containerStyles = css`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;