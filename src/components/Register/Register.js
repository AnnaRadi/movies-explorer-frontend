import { Link } from "react-router-dom";
import { useContext } from 'react';
import './Register.css';
import headerLogo from '../../images/logo.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormValidation from '../../utils/useFormValidation';


const Register = ({ onSignUp, errMessage, setErrAuthMessage }) => {
    const { values, handleChange, errs, isValid, resetForm } = useFormValidation();

    const { isLoading } = useContext(CurrentUserContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSignUp(values.name, values.email, values.password, resetForm);
    };

    const changeInput = (evt) => {
        setErrAuthMessage('');
        handleChange(evt);
    };

    return (
        <main className="register">
            <section className="register__container">
                <Link to="/" className="register__container-logo">
                    <img src={headerLogo} className="register__logo" alt="Logo" />
                </Link>
                <h2 className="register__container-title">Добро пожаловать!</h2>
                <form className="register__form" onSubmit={handleSubmit}>
                    <label className="register__form-label">Имя</label>
                    <input type="text" id="name" name="name"
                        minLength='2'
                        required
                        placeholder="Введите ваше имя"
                        className={`register__form-input ${errs.name && 'register__form-input_error'}`}
                        value={values.name || ''}
                        onChange={changeInput}
                        pattern='^[A-Za-zА-Яа-я\s\-]+$'
                        title='Имя должно содержать только допустимые значения'
                    />
                    <span className='register__err-message'>{errs.name}</span>
                    <label className="register__form-label">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Введите вашу почту"
                        value={values.email || ''} minLength='4' required
                        className={`register__form-input ${errs.email && 'register__form-input_error'}`}
                        pattern='^\S+@\S+\.\S+$'
                        title='Некорректный email'
                        onChange={changeInput}
                    />
                    <span className='register__err-message'>{errs.email}</span>
                    <label className="register__form-label">Пароль</label>
                    <input type="password" id="password" name="password" value={values.password || ''}
                        placeholder="Введите пароль" onChange={changeInput}
                        minLength='6'
                        maxLength='30'
                        required
                        className={`register__form-input ${errs.password && 'register__form-input_error'}`} />
                    <span className='register__err-message errors'>{errs.password}</span>
                    <button
                        disabled={!isValid || errMessage || isLoading}
                        className={`register__form-button ${!isValid || errMessage ? 'register__form-button_disabled' : ''
                            }`}
                        type='submit'
                        aria-label='Зарегистрироваться'
                    >
                        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                </form>
                <p className="register__form-question">Уже зарегистрированы?
                    <Link className="register__signin" to="/signin">Войти</Link>
                </p>
            </section>
        </main>
    )
}

export default Register;