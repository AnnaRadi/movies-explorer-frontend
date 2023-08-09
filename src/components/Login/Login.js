import './Login.css';
import '../Header/Header.css';
import headerLogo from '../../images/logo.svg';

const Login = () => {
    return (
        <main className="login">
            <section className="login__container">
                <img src={headerLogo} className="login__logo" alt="Logo" />
                <h2 className="login__container-title">Рады Видеть!</h2>
                <form className="login__container-form">
                    <label htmlFor="email" className="login__label">E-mail</label>
                    <input type="email" id="email" name="email" minLength='4' placeholder="aradion0va@yandex.ru" required
                        className="login__input" />
                    <label htmlFor="password" className="login__label">Пароль</label>
                    <input type="password" id="password" name="password" minLength='6' maxLength='30' placeholder="Пароль" required
                        className="login__input" />
                    <button type="button" className="login__button-signin" aria-label="Войти">Войти</button>
                </form>
                <p className="login__question">Еще не зареристрированы?
                    <a className="login__container-link" href="/signup">Регистрация</a></p>
            </section>
        </main>
    )
}

export default Login;