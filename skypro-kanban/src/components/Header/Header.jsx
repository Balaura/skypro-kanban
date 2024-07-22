import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

function Header({ onCardAdd, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleUserClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="/" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="/" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew onClick={onCardAdd}>
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser href="#" onClick={handleUserClick}>
              Ivan Ivanov
            </HeaderUser>
            {isMenuOpen && (
              <UserMenu>
                <UserName>Ivan Ivanov</UserName>
                <UserEmail>ivan.ivanov@gmail.com</UserEmail>
                <ThemeToggleWrapper>
                  <span>Темная тема</span>
                  <ThemeToggle>
                    <ToggleInput type="checkbox" onChange={onThemeToggle} />
                    <ToggleSlider />
                  </ThemeToggle>
                </ThemeToggleWrapper>
                <Link to="/exit">
                  <ExitButton>Выйти</ExitButton>
                </Link>
              </UserMenu>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;