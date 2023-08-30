/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { updateFiltered, findScreenSizeMap } from '../../utils/utils';
import useLocalStorage from '../../utils/useLocalStorage';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Movies.css'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
// import filmList from "../../utils/filmList";
import SeachForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/SearchForm/FilterCheckbox/FilterCheckbox';


const Movies = ({ showError, onDelete }) => {
  const [screenSize, setScreenSize] = useState(findScreenSizeMap(window.innerWidth));
  const [movies, setMovies] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchErr, setSearchErr] = useState(false);
  const { isRegistring, setIsRegistring } = useContext(CurrentUserContext);
  const [filteredMovies, setFilteredMovies] = useLocalStorage('movies', []);
  const [isTimeMovieChecked, setIsTimeMovieChecked] = useLocalStorage('isTimeMovieChecked', false);
  const [searchAllMovies, setSearcAllhMovies] = useLocalStorage('searchAllMovies', '');
  const [represendMoviesCount, setRepresendMoviesCoun] = useState(screenSize.cards);
  const moviesShow = filteredMovies.slice(0, represendMoviesCount);

  const [firstSearchDone, setFirstSearchDone] = useState(false); // Флаг первого поиска


  useEffect(() => {
    setIsRegistring(true);
    // Выполнение только при первом поиске
    if (!firstSearchDone) {
      Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
        .then(([moviesData, savedMovies]) => {
          const moviesSaved = moviesData.map((movie) => {
            const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
            return {
              ...movie,
              isSaved: Boolean(savedMovie),
              _id: savedMovie ? savedMovie._id : null,
            };
          });
          setMovies(moviesSaved);
        })
        .catch((err) => {
          showError(`Ошибка: ${err}`);
        })
        .finally(() => {
          setIsRegistring(false);
        });
      


      // Устанавливаем флаг первого поиска в true
      setFirstSearchDone(true);
    }
  }, [firstSearchDone]);
  
  // useEffect(() => {
  //   setIsRegistring(true);
  //   Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
  //     .then(([moviesData, savedMovies]) => {
  //       const moviesSaved = moviesData.map((movie) => {
  //         const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  //         return {
  //           ...movie,
  //           isSaved: Boolean(savedMovie),
  //           _id: savedMovie ? savedMovie._id : null,
  //         };
  //       });
  //       setMovies(moviesSaved);
  //     })
  //     .catch((err) => {
  //       showError(`'Ошибка:' ${err}`);
  //     })
  //     .finally(() => {
  //       setIsRegistring(false);
  //     });
  // }, []);

  
  const handleSearch = () => {
      setFilteredMovies([]);
      setSearchErr(false);
      if (!searchAllMovies) {
        setSearchErr(true);
        return;
      }
      handleFilter(isTimeMovieChecked);
    };

  useEffect(() => {
    setRepresendMoviesCoun(screenSize.cards);
  }, [screenSize.cards]);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newSize = findScreenSizeMap(window.innerWidth);
        setScreenSize(newSize);
        setRepresendMoviesCoun(newSize.cards);
      }, 500);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updatedAllMovies = filteredMovies.map((filteredMovie) => {
      const respondMovie = movies.find((movie) => movie.id === filteredMovie.id);
      if (respondMovie) {
        return {
          ...filteredMovie,
          isSaved: respondMovie.isSaved || false,
          _id: respondMovie._id || null,
        };
      } else {
        return filteredMovie;
      }
    });
    setFilteredMovies(updatedAllMovies);
  }, [movies]);

  const handleSaveClick = (movie) => {
    mainApi
      .addMovie(movie)
      .then((addedMovie) => {
        setMovies((prevMovies) =>
          prevMovies.map((film) =>
            film.id === addedMovie.movieId
              ? {
                ...film,
                isSaved: true,
                _id: addedMovie._id,
              }
              : film,
          ),
        );
      })
      .catch((error) => {
        showError(error);
      });
  };

  function handleDeleteCard(movieId) {
    onDelete(movieId)
      .then(() => {
        setMovies((prev) =>
          prev.map((film) =>
            film._id === movieId ?
              { ...film, isSaved: false, _id: null, } : film
          )
        );
      })
      .catch((err) => {
        showError(err);
      });
  }

  const handleFilter = (check) => {
    setIsNotFound(false);
    if (!searchAllMovies && filteredMovies.length === 0) return;
    const filter = updateFiltered(movies, searchAllMovies, check);
    return filter.length > 0 ? setFilteredMovies(filter) : setIsNotFound(true);
  };

  const handleTimeMovieChange = (check) => {
    setIsTimeMovieChecked(check);
    handleFilter(check);
  };

  const handleLoadMore = () => {
    const newCount = represendMoviesCount + screenSize.addCardsNumber;
    setRepresendMoviesCoun(newCount);
  };

  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main>
        <SeachForm setSearchAllMovies={setSearcAllhMovies}
          onSearch={handleSearch}
          searchAllMovies={searchAllMovies}
          setIsTimeMovieChecked={setIsTimeMovieChecked} />
        <FilterCheckbox onCheckboxChange={handleTimeMovieChange}
          isTimeMovieChecked={isTimeMovieChecked} />
        <section className="moviescards">
          <MoviesCardList
            movies={moviesShow}
            searchErr={searchErr}
            isNotFound={isNotFound}
            isRegistring={isRegistring}
            onSave={handleSaveClick}
            onDelete={handleDeleteCard}
          />
          {filteredMovies.length > represendMoviesCount && (
            <button className="movies__button-more" onClick={handleLoadMore}>Ещё</button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Movies;