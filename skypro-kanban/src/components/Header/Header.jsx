import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import logoLight from '../../../public/logo.png';
import logoDark from '../../../public/logo_dark.png';
import { HeaderWrapper, HeaderContainer, HeaderBlock, HeaderLogo, HeaderNav, HeaderBtnMainNew, HeaderUser, UserMenu, UserName, UserEmail, ThemeToggleWrapper, ThemeToggle, ToggleInput, ToggleSlider, ExitButton, HeaderUserWrapper } from './HeaderStyles';

const Header = ({ toggleTheme, setIsAuth }) => {
  const theme = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderBlock>
          <HeaderLogo>
            <img src={theme.name === 'dark' ? logoDark : logoLight} alt="Logo" />
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew as={Link} to="/card/new">Создать новую задачу</HeaderBtnMainNew>
            <HeaderUserWrapper><HeaderUser onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>Ivan Ivanov</HeaderUser>
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
            </HeaderUserWrapper>
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>

    </HeaderWrapper>
  );
};

export default Header;