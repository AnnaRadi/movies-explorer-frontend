import { useState, useEffect } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";


const MoviesCardList = ({ filmList }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="moviesCardsList">
      <div className="moviesCardsList__container">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className='moviesCards'>
              {filmList.map((film, index) => (
                <MoviesCard key={index} film={film} />
              ))}
            </ul>
            {filmList.length > 14 && (
              <button className="moviescards__button">Ещё</button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;