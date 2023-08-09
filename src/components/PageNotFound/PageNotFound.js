import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <main className="not-found">
      <section className='not-found__group-title'>
        <h3 className="not-found__title-number">404</h3>
        <h4 className="not-found__title">Страница не найдена</h4>
        <Link className="not-found__button" to={-1}>Назад</Link>
      </section>
    </main>
  )
}

export default PageNotFound;