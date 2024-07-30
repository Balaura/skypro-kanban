import styled from 'styled-components';
import { buttonStyles, cardContainerStyles } from '../../../styles/CommonStyles';

export const PopUserWrapper = styled.div`
  ${cardContainerStyles}
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const UserName = styled.p`
  color: ${props => props.theme.textPrimary};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 4px;
`;

export const UserEmail = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ExitButton = styled.button`
  ${buttonStyles}
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
`;