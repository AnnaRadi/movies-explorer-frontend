import './Login.css';
import '../Header/Header.css';
import headerLogo from '../../images/logo.svg';

const Login = () => {
    return (
        <main className="login">
            <div className="login__container">
                <img src={headerLogo} className="header__logo" alt="Logo" />
                <h2 className="login__container-title">Рады Видеть!</h2>
                <form className="login__container-form">
                    <label htmlFor="email" className="login__container-form_label">E-mail</label>
                    <input type="email" id="email" name="email" minLength='4' required
                        className="login__container-form_input" />
                    <label htmlFor="password" className="login__container-form_label">Пароль</label>
                    <input type="password" id="password" name="password" minLength='6' required
                        className="login__container-form_input" />
                    <button type="button" className="login__button-signin" aria-label="Войти">Войти</button>
                </form>
                <p className="login__container_question">Еще не зареристрированы?
                    <a className="login__container-link" href="/signup">Регистрация</a></p>
            </div>
        </main>
    )
}

export default Login;