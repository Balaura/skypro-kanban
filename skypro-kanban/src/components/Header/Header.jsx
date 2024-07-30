import React, { useState } from 'react';
import '../../App.css';

function Header({ onCardAdd }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo *show *light">
            <a href="/" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="/" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={onCardAdd}>
              Создать новую задачу
            </button>
            <div className="header__user-menu-wrapper">
              <a href="#" className="header__user _hover02" onClick={toggleUserMenu}>Ivan Ivanov</a>
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
                style={{ display: isUserMenuOpen ? 'block' : 'none' }}
              >
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;