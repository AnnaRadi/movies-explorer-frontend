import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormValidation from '../../utils/useFormValidation';
import './Profile.css';

const Profile = ({ onSignOut, onChangeUserInfo, errMessage, setErrAuthMessage }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const { currentUser, isRegistring } = useContext(CurrentUserContext);
  // const isRegistring = false;
  const [isEdit, setIsEdit] = useState(false);
  const { values, handleChange, errs, isValid } = useFormValidation();

  useEffect(() => {
    console.log(currentUser)
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser])

  useEffect(() => {
    if (errMessage) {
      setIsEdit(true);
    }
  }, [errMessage])

  useEffect(() => {
    return () => {
      setErrAuthMessage('');
      setIsEdit(false);
    };
  }, [setErrAuthMessage]);

  const handleChangeInput = (evt) => {
    setErrAuthMessage('');
    handleChange(evt);
    const updatedName = evt.target.name === 'name' ? evt.target.value : values.name;
    const updatedEmail = evt.target.name === 'email' ? evt.target.value : values.email;
    if (updatedName === currentUser?.name && updatedEmail === currentUser?.email) {
      setErrAuthMessage('Скорректируйте данные.');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onChangeUserInfo({
      name: values.name || name,
      email: values.email || email,
    });
    setIsEdit(false);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className='profile'>
        <h2 className='profile__title'>Привет, {currentUser?.name}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__container-name'>
            <label htmlFor='name' className='profile__container-title'>Имя</label>
            {isEdit ? (
              <div className='profile__field-container'>
                <input type='text' name='name' minLength='2' placeholder="Введите ваше имя"
                  pattern='^[A-Za-zА-Яа-я\s\-]+$'
                  title='Имя должно содержать только допустимые значения'
                  value={values.name || name}
                  className={`profile__container-label ${errs.email && 'profile__container_label_error'}`}
                  onChange={handleChangeInput}
                />
                <span className='profile__container-errs'>{errs.name}</span>
              </div>
            ) : (
              <span className='profile__container-value'>{name}</span>)}
          </div>
          <div className='profile__container-email'>
            <label htmlFor='email' className='profile__container-title'>E-mail</label>
            {isEdit ? (
              <div className='profile__field-container'>
                <input type='email' name='email' placeholder="Введите вашу почту"
                  value={values.email || email}
                  onChange={handleChangeInput}
                  className={`profile__container-label ${errs.email && 'profile__container_label_error'}`}
                  pattern='^\S+@\S+\.\S+$'
                  title='Некорректный формат' />
                  <span className='profile__container-errs'>{errs.email}</span>
              </div>) : (<span className='profile__container-value'>{email}</span>)}
          </div>
        {isEdit ? (
          <>
            <div className='profile__button'>
              <span className='profile__msg-error'>{errMessage}</span>
              <button
                type='submit'
                className={`profile__save-button ${!isValid || errMessage ? 'profile__save-button_disabled' : ''}`}
                disabled={!isValid || errMessage || isRegistring}
                aria-label='Сохранить'>
                Сохранить
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='profile__button'>
              <button type='button'
                className='profile__button-edit'
                href='/'
                onClick={handleEditClick}
                aria-label='Редактировать профиль'>
                Редактировать
              </button>
              <button type='button'
                className='profile__button-exit'
                aria-label='Выйти из аккаунта'
                onClick={onSignOut}
                disabled={isRegistring}>
                Выйти из аккаунта
              </button>
            </div>
          </>
        )}
        </form>
      </main>
    </>
  )
}

export default Profile;