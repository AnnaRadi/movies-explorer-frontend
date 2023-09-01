import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to="/" className="navigation__moovie">Главная</NavLink>
          )}
          <NavLink to="/movies" className="navigation__moovie">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__moovie">Сохраненные фильмы</NavLink>
        </div>
        <Link to="/profile" className="navigation__container-account">
          <p className="navigation__title">Аккаунт</p>
          <div className='navigation__container-img'>
            <img className='navigation__img' src={img} alt='профиль' />
          </div>
        </Link>
        {!isMenuOpen && <button type="button" className="navigation__burger" onClick={burgerMenu} aria-label='Открыть меню'></button>}
        {isMenuOpen && <button type="button" className="navigation__burger-close" onClick={burgerMenu} aria-label='Закрыть меню'></button>}
      </nav>
    </>
  );
}

export default Navigation;