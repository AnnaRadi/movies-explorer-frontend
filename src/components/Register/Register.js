import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Register.css';
import headerLogo from '../../images/logo.svg';

const Register = () => {
    const
        { register,
            formState: { errors },
            handleSubmit } = useForm({ mode: 'onBlur' });
    const onSubmit = (data) => console.log(data);

    return (
        <main className="register">
            <section className="register__container">
                <Link to="/" className="register__container-logo">
                    <img src={headerLogo} className="register__logo" alt="Logo" />
                </Link>
                <h2 className="register__container-title">Добро пожаловать!</h2>
                <form className="register__form" onSubmit={handleSubmit(onSubmit)} action='submit'>
                    <label className="register__form-label">Имя</label>
                    <input type="text" id="name" name="name"
                        minLength='2' maxLength='30' placeholder="Введите ваше имя"
                        className="register__form-input"
                        {...register('name', {
                            required: 'Это поле необходимо заполнить',
                            minLength: {
                                value: 2,
                                message: 'Имя должно состоять минимум из 2 символов',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Имя должно состоять максимум из 30 символов',
                            },
                        })} />
                    <span className='errors'>{console.log(errors?.name?.message)}</span>
                    <label className="register__form-label">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Введите вашу почту"
                        className="register__form-input"
                        {...register('email', {
                            required: { value: true, message: 'Это поле необходимо заполнить' },
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Пожалуйста, укажите корректный электронный адрес',
                            },
                        })} />
                    <span className='errors'>{console.log(errors?.email?.message)}</span>
                    <label className="register__form-label">Пароль</label>
                    <input type="password" id="password" name="password"
                        placeholder="Введите пароль" className="register__form-input register__form-input_error"
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