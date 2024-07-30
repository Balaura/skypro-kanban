import styled, { css } from 'styled-components';
import { buttonStyles } from '../../styles/CommonStyles';

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.cardBackground};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
  ${buttonStyles}
  width: auto;
  min-width: 178px;
  height: 30px;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  white-space: nowrap;
  
  @media (max-width: 1200px) {
    font-size: 12px;
    padding: 0 15px;
  }
  
  @media (max-width: 992px) {
    min-width: 150px;
    margin-right: 10px;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.primary};
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${props => props.theme.primary};
    border-bottom: 1.9px solid ${props => props.theme.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 10px 39px rgba(26, 56, 101, 0.21);
  padding: 34px;
  z-index: 10;
  text-align: center;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.textPrimary};
  margin-bottom: 4px;
`;

export const UserEmail = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 10px;
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ThemeToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #565EEF;
  }
  
  &:checked + span:before {
    transform: translateX(12px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #C1C1C1;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

export const ExitButton = styled.button`
  width: 72px;
  height: 30px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary || '#565EEF'};
  border-radius: 4px;
  color: ${props => props.theme.primary || '#565EEF'};
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary || '#565EEF'};
    color: ${props => props.theme.cardBackground || '#FFFFFF'};
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const LogoImage = styled.img`
  width: 85px;
  display: ${props => props.$isLight ? 'block' : 'none'};
  
  ${props => props.$isDark && `
    display: none;
  `}
  
  @media (prefers-color-scheme: dark) {
    display: ${props => props.$isDark ? 'block' : 'none'};
  }
`;