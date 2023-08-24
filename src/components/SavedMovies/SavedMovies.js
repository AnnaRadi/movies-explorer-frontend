import React, { useState } from 'react';
// import filmList from "../../utils/filmListSaved.json";
import Header from '../Header/Header'
import SeachForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import './SavedMovies.css'

const SavedMovies = ({ savedMovies, onSubmit, onDelete, errMessage }) => {
  const [isShortFilm, setIsShortFilm] = useState(
    () => localStorage.getItem('isShortSavedFilm') === 'true'
  );

  const filteredMovies = isShortFilm
  ? savedMovies.filter((movie) => movie.duration < 40)
  : savedMovies;

  const handleShortFilmClick = () => {
    const newIsShortFilm = !isShortFilm;
    setIsShortFilm(newIsShortFilm);
    localStorage.setItem('isShortSavedFilm', newIsShortFilm);
  };

  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className="savedMovies">
        <SeachForm   onSubmit={onSubmit}    isShortFilm={isShortFilm} shortFilmsClick={handleShortFilmClick}/>
        <MoviesCardList savedMovies={filteredMovies} onDelete={onDelete} errMessage={errMessage}/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;