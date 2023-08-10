import { Link } from "react-router-dom";
import './NavTab.css'

const NavTab = () => {
  return (
    <nav className="header__button">
      <Link to="/signup" className="header__button-signup">
        Регистрация
      </Link>
      <Link to="/signin" className="header__button-signin">
        Войти
      </Link>
    </nav>
  );
}

export default NavTab;