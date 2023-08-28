// import { useState, useEffect } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";


const MoviesCardList = ({ movies, searchErr, isRegistring, isNotFound, onSave, onDelete }) => {

  return (
    <section className="moviesCardsList">
      <div className="moviesCardsList__container">
        {isRegistring && <Preloader />}
        {searchErr && <p className='moviescards__error'>Нужно ввести ключевое слово!</p>}
        {isNotFound && !searchErr && <p className='moviescards__not-found'>Ничего не найдено!</p>}
        {!isRegistring && !searchErr && !isNotFound && (
          <ul className='moviesCards'>
            {movies.map((movie) => (
              <MoviesCard key={movie.id || movie.movieId} movie={movie} onSave={onSave}
                onDelete={onDelete} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;