import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = () => {
    setIsEdit(false);
  };

  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className='profile'>
        <h2 className='profile__title'>Привет, Аня</h2>
        <form className='profile__form'>
          <div className='profile__container-name'>
            <label htmlFor='name' className='profile__container-title'>Имя</label>
            {isEdit ? <input type='text' name='name' minLength='2' maxLength='30'placeholder="Введите ваше имя"
              className='profile__container_label' /> : <span className='profile__container-value'>Аня</span>}
          </div>
          <div className='profile__container-email'>
            <label htmlFor='email' className='profile__container-title'>E-mail</label>
            {isEdit ? <input type='email' name='email'placeholder="Введите вашу почту"
              className='profile__container-label' /> : <span className='profile__container-value'>aradion0va@yandex.ru</span>}
          </div>
        </form>
        {isEdit ? (
          <>
            <div className='profile__button'>
              <span className='profile__msg-error'>Ошибка обновления</span>
              <button type='button' className='profile__save-button profile__save-button_disabled'
                handler={handleSaveClick} aria-label='Сохранить'>
                Сохранить
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='profile__button'>
              <button type='button' className='profile__button-edit' href='/' onClick={handleEditClick} aria-label='Редактировать профиль'>
                Редактировать
              </button>
              <Link type='button' to='/' className='profile__button-exit' href='/signout' aria-label='Выйти из аккаунта'>
                Выйти из аккаунта
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Profile;