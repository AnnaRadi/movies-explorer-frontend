import React from 'react';
import headerLogo from '../../images/logo.svg';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../Main/NavTab/NavTab';
import { authPages } from '../../utils/constants';
import './Header.css';

const Header = ({ backgroundColor }) => {
  const headerStyle = {
    backgroundColor: backgroundColor,
  };
  const location = useLocation();
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <header style={headerStyle} className="header">
      <div className='header__contaner'>
        <img src={headerLogo} className="header__logo" alt="Logo" />
        {isAuthPage ? <Navigation /> : <NavTab />}
      </div>
    </header>
  );
};

export default Header;