import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import filmList from "../../utils/filmList";
import SeachForm from '../Movies/SearchForm/SearchForm';


const Movies = () => {
  return (
    <section className='movies'>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main>
        <SeachForm />
        <MoviesCardList filmList={filmList} />
      </main>
      <Footer />
    </section>
  );
};

export default Movies;