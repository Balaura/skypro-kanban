import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import logoLight from '../../../public/logo.png';
import logoDark from '../../../public/logo_dark.png';
import * as styles from './HeaderStyles';

const Header = ({ toggleTheme, setIsAuth }) => {
  const theme = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <styles.HeaderWrapper>
      <styles.HeaderContainer>
        <styles.HeaderBlock>
          <styles.HeaderLogo>
            <img src={theme.name === 'dark' ? logoDark : logoLight} alt="Logo" />
          </styles.HeaderLogo>
          <styles.HeaderNav>
            <styles.HeaderBtnMainNew as={Link} to="/card/new">Создать новую задачу</styles.HeaderBtnMainNew>
            <styles.HeaderUserWrapper><styles.HeaderUser onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>Ivan Ivanov</styles.HeaderUser>
              {isUserMenuOpen && (
                <styles.UserMenu>
                  <styles.UserName>Ivan Ivanov</styles.UserName>
                  <styles.UserEmail>ivan.ivanov@example.com</styles.UserEmail>
                  <styles.ThemeToggleWrapper>
                    <p>Темная тема</p>
                    <styles.ThemeToggle>
                      <styles.ToggleInput type="checkbox" onChange={toggleTheme} />
                      <styles.ToggleSlider />
                    </styles.ThemeToggle>
                  </styles.ThemeToggleWrapper>
                  <styles.ExitButton as={Link} to="/exit" onClick={handleLogout}>Выйти</styles.ExitButton>
                </styles.UserMenu>
              )}
            </styles.HeaderUserWrapper>
          </styles.HeaderNav>
        </styles.HeaderBlock>
      </styles.HeaderContainer>

    </styles.HeaderWrapper>
  );
};

export default Header;