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
  ExitButton,
  LogoLink,
  LogoImage
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
          <HeaderLogo>
            <LogoLink href="/" target="_self">
              <LogoImage src="/images/logo.png" alt="logo" $isLight />
              <LogoImage src="/images/logo_dark.png" alt="logo" $isDark />
            </LogoLink>
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