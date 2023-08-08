import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import img from '../../images/icon__COLOR_icon-main.svg'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <div className="nav__overlay" onClick={burgerMenu}></div>}
      <nav className={`navigation ${isMenuOpen ? "navigation__active" : ""}`}>
        <div className="navigation__container">
          {isMenuOpen && (
            <Link to="/" className="navigation__moovie">Главная</Link>
          )}
          <Link to="/movies" className="navigation__moovie navigation__container_link-film">Фильмы</Link>
          <Link to="/saved-movies" className="navigation__moovie navigation__container_link">Сохраненные фильмы</Link>
        </div>
        <Link to="/profile" className="navigation__container_account">
          <p className="navigation__container_account-title">Аккаунт</p>
          <img className='navigation__container_account-img' src={img} alt='профиль' />
        </Link>
        {!isMenuOpen && <button type="button" className="nav__burger" onClick={burgerMenu} aria-label='Открыть бургерное меню'></button>}
        {isMenuOpen && <button type="button" className="nav__burger-close" onClick={burgerMenu} aria-label='Закрыть бургерное меню'></button>}
      </nav>
    </>
  );
}

export default Navigation;