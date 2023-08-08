import React, { useState } from 'react';
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
      <section className='profile'>
        <h2 className='profile__title'>Привет, Аня</h2>
        <div className='profile__container-name'>
          <label htmlFor='name' className='profile__container-title'>Имя</label>
          {isEdit ? <input type='text' name='name' minLength='2'
            className='profile__container_label' /> : <span className='profile__container-value'>Аня</span>}
        </div>
        <div className='profile__container_email'>
          <label htmlFor='email' className='profile__container-title'>E-mail</label>
          {isEdit ? <input type='email' name='email'
            className='profile__container_label' /> : <span className='profile__container-value'>aradion0va@yandex.ru</span>}
        </div>
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
              <button type='button' className='profile__button-exit' href='/signout' aria-label='Выйти из аккаунта'>
                Выйти из аккаунта
              </button>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default Profile;