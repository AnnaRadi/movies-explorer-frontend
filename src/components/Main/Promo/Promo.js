import React from 'react';
import './Promo.css';
import img from '../../../images/text__COLOR_landing-logo.svg';

const Promo = () => {

  return (
    <section className="promo">
      <div className='promo__container'>
        <div className='promo__text-group'>
          <article className="promo__group-article">
            <h1 className="promo__title">Учебный проект студента факультета <span className='promo__title-span'>Веб-разработки.</span></h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </article>
          <img src={img} className="promo__img" alt="мир" />
        </div>
        <a className="promo__button" href="#scroll" >Узнать больше</a>
      </div>
    </section>
  );
};
export default Promo;