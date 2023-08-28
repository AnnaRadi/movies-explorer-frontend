import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../Main/NavTab/NavTab';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import './Header.css';

const Header = ({ backgroundColor }) => {
  const headerStyle = {
    backgroundColor: backgroundColor,
  };

  const { loggedIn } = useContext(CurrentUserContext);

  return (
    <header style={headerStyle} className="header">
      <div className='header__contaner'>
        <Link to="/" className="header__container-logo">
          <img src={headerLogo} className="header__logo" alt="Logo" />
        </Link>
        {loggedIn ? <Navigation /> : <NavTab />}
      </div>
    </header>
  );
};

export default Header;