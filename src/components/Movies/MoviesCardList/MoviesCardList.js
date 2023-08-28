// import { useState, useEffect } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";


const MoviesCardList = ({ movies, searchError, isLoading, noResults, onSave, onDelete }) => {

  return (
    <section className="moviesCardsList">
      <div className="moviesCardsList__container">
        {isLoading && <Preloader />}
        {searchError && <p className='moviescards__error'>Нужно ввести ключевое слово!</p>}
        {noResults && !searchError && <p className='moviescards__not-found'>Ничего не найдено!</p>}
        {!isLoading && !searchError && !noResults && (
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