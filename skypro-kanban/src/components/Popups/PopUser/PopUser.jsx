import React from 'react';
import {
  PopUserWrapper,
  UserName,
  UserEmail,
  ThemeToggle,
  ExitButton
} from './PopUserStyles';

function PopUser({ isOpen }) {
  if (!isOpen) return null;
  return (
    <PopUserWrapper isOpen={isOpen} id="user-set-target">
      <UserName>Ivan Ivanov</UserName>
      <UserEmail>ivan.ivanov@gmail.com</UserEmail>
      <ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </ThemeToggle>
      <ExitButton>
        <a href="#popExit">Выйти</a>
      </ExitButton>
    </PopUserWrapper>
  );
}

export default PopUser;