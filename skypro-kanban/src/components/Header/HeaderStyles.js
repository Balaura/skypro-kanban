import styled from 'styled-components';
import { buttonStyles } from '../../styles/CommonStyles';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${props => props.theme.cardBackground};
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 16px 0px ;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;


export const HeaderBtnMainNew = styled.button`
  ${buttonStyles}
  background-color: #565EEF;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  white-space: nowrap;
`;

export const HeaderUser = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  
  &::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-right: 2px solid ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
    transform: rotate(45deg);
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &.open::after {
    transform: rotate(-135deg);
  }
`;

export const HeaderUserWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 10px 39px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 10;
  min-width: 213px;
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
  padding: 5.5px 13.46px 5.5px 13.46px;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => props.theme.primary || '#565EEF'};
    color: ${props => props.theme.cardBackground || '#FFFFFF'};
  }
`;