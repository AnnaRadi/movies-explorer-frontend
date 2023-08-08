import React from 'react';
import './Promo.css';
import Header from '../../Header/Header';
import img from '../../../images/text__COLOR_landing-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <Header />
      <div className='promo__block'>
        <div className='promo__group'>
          <article className="promo__text-conteiner">
            <h1 className="promo__title">Учебный проект студента факультета <span className='promo__title-span'>Веб-разработки.</span></h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </article>
          <img src={img} className="promo__img" alt="мир" />
        </div>
        <button className="promo__button">Узнать больше</button>
      </div>
    </section>
  );
};
export default Promo;