import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import filmList from "../../utils/filmList";
import SeachForm from '../Movies/SearchForm/SearchForm';


const Movies = () => {
  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main>
        <SeachForm />
        <MoviesCardList filmList={filmList} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;