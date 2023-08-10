import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import './Login.css';
import '../Header/Header.css';
import headerLogo from '../../images/logo.svg';

const Login = () => {
    const
        { register,
            formState: { errors },
            handleSubmit } = useForm({ mode: 'onBlur' });
    const onSubmit = (data) => console.log(data);

    return (
        <main className="login">
            <section className="login__container">
            <Link to="/" className="register__container-logo">
                <img src={headerLogo} className="login__logo" alt="Logo" />
            </Link>
                <h2 className="login__container-title">Рады Видеть!</h2>
                <form className="login__container-form" onSubmit={handleSubmit(onSubmit)} action='submit'>
                    <label htmlFor="email" className="login__label">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Введите вашу почту"
                        className="login__input" 
                        {...register('email', {
                            required: { value: true, message: 'Это поле необходимо заполнить' },
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Пожалуйста, укажите корректный электронный адрес',
                            },
                        })} />
                    <span className='errors'>{console.log(errors?.email?.message)}</span>
                    <label htmlFor="password" className="login__label">Пароль</label>
                    <input type="password" id="password" name="password" placeholder="Введите ваш пароль"
                        className="login__input" 
                        {...register('password', {
                            required: 'Это поле необходимо заполнить',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен состоять минимум из 6 символов',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Имя должно состоять максимум из 30 символов',
                            },
                        })} />
                    <span className='errors'>{console.log(errors?.password?.message)}</span>
                    <button type="button" className="login__button-signin" aria-label="Войти">Войти</button>
                </form>
                <p className="login__question">Еще не зареристрированы?
                    <a className="login__container-link" href="/signup">Регистрация</a></p>
            </section>
        </main>
    )
}

export default Login;