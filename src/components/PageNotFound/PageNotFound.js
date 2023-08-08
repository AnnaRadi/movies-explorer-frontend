import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="not-found">
      <div className='not-found__group-title'>
        <h3 className="not-found__title_number">404</h3>
        <h4 className="not-found__title">Страница не найдена</h4>
        <Link className="button_type_to-main" to={-1}>Назад</Link>
      </div>
    </div>
  )
}

export default PageNotFound;