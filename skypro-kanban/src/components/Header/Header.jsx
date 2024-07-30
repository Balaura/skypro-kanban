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
import styled from 'styled-components';
import { containerStyles } from "../../styles/CommonStyles";

const Container = styled.div`
  ${containerStyles}
`;

function Header({ onCardAdd, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleUserClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
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
                <ExitButton>Выйти</ExitButton>
              </UserMenu>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;