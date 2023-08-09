
import './Register.css';
import headerLogo from '../../images/logo.svg';

const Register = () => {
  return (
    <main className="register">
      <section className="register__container">
        <img src={headerLogo} className="register__logo" alt="Logo" />
        <h2 className="register__container-title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__form-label">Имя</label>
          <input type="text" id="name" name="name" minLength='2' maxLength='30' placeholder="Аня" required className="register__form-input" autocomplete="off" />
          <label className="register__form-label">E-mail</label>
          <input type="email" id="email" name="email" minLength='4'placeholder="aradion0va@yandex.ru" required className="register__form-input" autocomplete="off" />
          <label className="register__form-label">Пароль</label>
          <input type="password" id="password" name="password" minLength='6' maxLength='30'placeholder="Пароль" required
            className="register__form-input register__form-input_error" autocomplete="off" />
          <span className="register__error-message">Что-то пошло не так...</span>
          <button type="button" className="register__form-button" aria-label="Зарегистрироваться">Зарегистрироваться</button>
        </form>
        <p className="register__form-question">Уже зарегистрированы?
          <a className="register__signin" href="/signin">Войти</a>
        </p>
      </section>
    </main>
  )
}

export default Register;