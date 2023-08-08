
import './Register.css';
import '../Header/Header.css';
import headerLogo from '../../images/logo.svg';

const Register = () => {
  return (
    <main className="register">
      <div className="register__container">
        <img src={headerLogo} className="header__logo" alt="Logo" />
        <h2 className="register__container-title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__form-label">Имя</label>
          <input type="text" id="name" name="name" minLength='2' required className="register__form-input" autocomplete="off" />
          <label className="register__form-label">E-mail</label>
          <input type="email" id="email" name="email" minLength='4' required className="register__form-input" autocomplete="off" />
          <label className="register__form-label">Пароль</label>
          <input type="password" id="password" name="password" minLength='6' required
            className="register__form-input register__form-input_error" autocomplete="off" />
          <span className="register__form_error-message">Что-то пошло не так...</span>
          <button type="button" className="register__form-button" aria-label="Зарегистрироваться">Зарегистрироваться</button>
        </form>
        <p className="register__form-question">Уже зарегистрированы?
          <a className="register__form-link_signin" href="/signin">Войти</a>
        </p>
      </div>
    </main>
  )
}

export default Register;