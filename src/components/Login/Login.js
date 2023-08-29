import { Link } from "react-router-dom";
import { useContext } from 'react';

import './Login.css';
import '../Header/Header.css';
import headerLogo from '../../images/logo.svg';
import useFormValidation from '../../utils/useFormValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const Login = ({ onSignIn, errMessage, setErrAuthMessage }) => {
    const { values, handleChange, errs, isValid, resetForm } = useFormValidation();
    const { isRegistring } = useContext(CurrentUserContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSignIn(values.email, values.password, resetForm);
    };

    const changeInput = (evt) => {
        setErrAuthMessage('');
        handleChange(evt);
    };

    return (
        <main className="login">
            <section className="login__container">
                <Link to="/" className="register__container-logo">
                    <img src={headerLogo} className="login__logo" alt="Logo" />
                </Link>
                <h2 className="login__container-title">Рады Видеть!</h2>
                <form className="login__container-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="login__label">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Введите вашу почту" minLength='4'
                        required
                        className={`login__input ${errs.email && 'login__input_error'}`}
                        value={values.email || ''}
                        pattern='^\S+@\S+\.\S+$'
                        title='Некорректный email'
                        onChange={changeInput} />
                    <span className="login__error-message_first">{errs.email}</span>
                    <label htmlFor="password" className="login__label">Пароль</label>
                    <input type="password" id="password" name="password" placeholder="Введите ваш пароль" minLength='6'
                        maxLength='30'
                        required
                        className={`login__input ${errs.password && 'login__input_error'}`}
                        value={values.password || ''}
                        onChange={changeInput} />
                    <span className='login__error-message'>{errs.password}</span>
                    <button
                        disabled={!isValid || errMessage || isRegistring}
                        className={`login__button-signin ${!isValid || errMessage ? 'login__button-signin_disabled' : ''
                            }`}
                        type='submit'
                        aria-label="Войти"
                    >
                        {isRegistring ? 'Вход...' : 'Войти'}
                    </button>

                </form>
                <p className="login__question">Еще не зареристрированы?
                    <a className="login__container-link" href="/signup">Регистрация</a></p>
            </section>
        </main>
    )
}

export default Login;