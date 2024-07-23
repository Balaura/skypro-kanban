import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import logoLight from '../../../public/logo.png';
import logoDark from '../../../public/logo_dark.png';
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  UserMenu,
  UserName,
  UserEmail,
  ThemeToggleWrapper,
  ThemeToggle,
  ToggleInput,
  ToggleSlider,
  ExitButton
} from './HeaderStyles';

const Header = ({ toggleTheme, setIsAuth }) => {
  const theme = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderLogo>
          <img src={theme.name === 'dark' ? logoDark : logoLight} alt="Logo" />
          {/* <img src="/logo.png" alt="Logo" /> */}
        </HeaderLogo>
        <HeaderNav>
          <HeaderBtnMainNew as={Link} to="/card/new">Создать новую задачу</HeaderBtnMainNew>
          <HeaderUser onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>Ivan Ivanov</HeaderUser>
        </HeaderNav>
      </HeaderBlock>
      {isUserMenuOpen && (
        <UserMenu>
          <UserName>Ivan Ivanov</UserName>
          <UserEmail>ivan.ivanov@example.com</UserEmail>
          <ThemeToggleWrapper>
            <p>Темная тема</p>
            <ThemeToggle>
              <ToggleInput type="checkbox" onChange={toggleTheme} />
              <ToggleSlider />
            </ThemeToggle>
          </ThemeToggleWrapper>
          <ExitButton as={Link} to="/exit" onClick={handleLogout}>Выйти</ExitButton>
        </UserMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;