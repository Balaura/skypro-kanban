import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoLight from '../../../public/logo.png';
import logoDark from '../../../public/logo_dark.png';
import * as styles from './HeaderStyles';

const Header = ({ toggleTheme, setIsAuth }) => {
  const theme = localStorage.getItem('theme') || 'light';
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/exit');
  };

  return (
    <styles.HeaderWrapper>
      <styles.HeaderContainer>
        <styles.HeaderBlock>
          <styles.HeaderLogo>
            <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
          </styles.HeaderLogo>
          <styles.HeaderNav>
            <styles.HeaderBtnMainNew as={Link} to="/card/new">Создать новую задачу</styles.HeaderBtnMainNew>
            <styles.HeaderUserWrapper>
              <styles.HeaderUser onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                Ivan Ivanov
              </styles.HeaderUser>
              {isUserMenuOpen && (
                <styles.UserMenu>
                  <styles.UserName>Ivan Ivanov</styles.UserName>
                  <styles.UserEmail>ivan.ivanov@example.com</styles.UserEmail>
                  <styles.ThemeToggleWrapper>
                    <p>Темная тема</p>
                    <styles.ThemeToggle>
                      <styles.ToggleInput type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                      <styles.ToggleSlider />
                    </styles.ThemeToggle>
                  </styles.ThemeToggleWrapper>
                  <styles.ExitButton onClick={handleLogout}>Выйти</styles.ExitButton>
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