import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logoLight from '../../../public/logo.png';
import logoDark from '../../../public/logo_dark.png';
import * as styles from './HeaderStyles';
import PopNewCard from '../Popups/PopNewCard/PopNewCard';
import { useTheme } from '../../contexts/ThemeContext';
import { AppRoutesObj } from '../../routes/routes';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();
  const handleLogout = () => {
    navigate(AppRoutesObj.EXIT);
  };

  return (
    <styles.HeaderWrapper>
      <styles.HeaderContainer>
        <styles.HeaderBlock>
          <styles.HeaderLogo>
            <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
          </styles.HeaderLogo>
          <styles.HeaderNav>
            <styles.HeaderBtnMainNew onClick={() => setIsNewCardModalOpen(true)}>
              Создать новую задачу
            </styles.HeaderBtnMainNew>
            <styles.HeaderUserWrapper>
              <styles.HeaderUser onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                {user ? user.name : 'Гость'}
              </styles.HeaderUser>
              {isUserMenuOpen && (
                <styles.UserMenu>
                  <styles.UserName>{user ? user.name : 'Гость'}</styles.UserName>
                  <styles.UserEmail>{user ? user.login : 'Не авторизован'}</styles.UserEmail>
                  <styles.ThemeToggleWrapper>
                    <p>Темная тема</p>
                    <styles.ThemeToggle>
                      <styles.ToggleInput
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                      />
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
      {isNewCardModalOpen && (
        <PopNewCard
          isOpen={isNewCardModalOpen}
          onClose={() => setIsNewCardModalOpen(false)}
        />
      )}
    </styles.HeaderWrapper>
  );
};

export default Header;