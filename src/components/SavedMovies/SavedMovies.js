import React, { useState, useEffect, useContext } from 'react';
// import filmList from "../../utils/filmListSaved.json";
import { moviesApi } from '../../utils/MoviesApi';
import Header from '../Header/Header'
import SeachForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import useLocalStorage from '../../utils/useLocalStorage';
import mainApi from '../../utils/MainApi';
import FilterCheckbox from '../Movies/SearchForm/FilterCheckbox/FilterCheckbox';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { updateFiltered } from '../../utils/utils';

import './SavedMovies.css'

const SavedMovies = ({ onDelete, showError }) => {
  const [savedMovies, setSavedMovie] = useState([]);
  const { isRegistring, setIsRegistring } = useContext(CurrentUserContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useLocalStorage('movies', []); // Локальное хранилище данных фильмов
  const [isTimeMovieChecked, setIsTimeMovieChecked] = useState(false);
  const [searchAllMovies, setSearchAllMovies] = useState('');
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchErr, setSearchErr] = useState(false);

  const deleteCard = (movieId) => {
    onDelete(movieId)
      .then(() => {
        setSavedMovie((prev) => prev.filter((movie) => movie._id !== movieId));
        setFilteredMovies((prev) => prev.filter((movie) => movie._id !== movieId));
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
  };

  const loadMovies = () => {
    setIsRegistring(true);
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
  };

  useEffect(() => {
    if(!movies.length) {
      loadMovies()
    }

    const savedFilteredMovies = movies.filter((movie) => movie.isSaved);
    setSavedMovie([...savedFilteredMovies]);
    setFilteredMovies([...savedFilteredMovies]);

    // mainApi
    //   .getMovies()
    //   .then((movies) => {
    //     setSavedMovie(movies);
    //     setFilteredMovies(movies);
    //   })
    //   .catch((err) => {
    //     showError(`'Ошибка:' ${err}`);
    //   })
    //   .finally(() => {
    //     setIsRegistring(false);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = (check) => {
    setIsNotFound(false);
    if (!searchAllMovies && filteredMovies.length === 0) return;
    const filtered = updateFiltered(savedMovies, searchAllMovies, check);
    return filtered.length > 0 ? setFilteredMovies(filtered) : setIsNotFound(true);
  };

  const changeTimeMovie = (check) => {
    setIsTimeMovieChecked(check);
    handleFilter(check);
  };

  const handleSearch = () => {
    setFilteredMovies([]);
    setSearchErr(false);
    if (!searchAllMovies) {
      setSearchErr(true);
      return;
    }
    handleFilter(isTimeMovieChecked, searchAllMovies);
  };

  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className="savedMovies">
        <SeachForm
          searchQuery={searchAllMovies}
          onSearch={handleSearch}
          setIsTimeMovieChecked={setIsTimeMovieChecked}
          setSearchAllMovies={setSearchAllMovies} />
        <FilterCheckbox onCheckboxChange={changeTimeMovie} isTimeMovieChecked={isTimeMovieChecked} />
        <MoviesCardList
          isNotFound={isNotFound}
          onDelete={deleteCard}
          searchErr={searchErr}
          isRegistring={isRegistring}
          movies={filteredMovies} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;