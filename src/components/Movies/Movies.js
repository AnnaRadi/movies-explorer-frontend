import React, { useEffect, useState, useContext } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { updateFilteredMovies, findScreenSize } from '../../utils/utils';
import useLocalStorage from '../../utils/useLocalStorage';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import filmList from "../../utils/filmList";
import SeachForm from '../Movies/SearchForm/SearchForm';


const Movies = () => {
  // const [screenSize, setScreenSize] = useState(findScreenSize(window.innerWidth));
  // const [movies, setMovies] = useState([]);
  // const [noResults, setNoResults] = useState(false);
  // const [searchError, setSearchError] = useState(false);
  // const { isLoading, setIsLoading } = useContext(CurrentUserContext);
  // const [filteredMovies, setFilteredMovies] = useLocalStorage('movies', []);
  // const [isShortFilmChecked, setIsShortFilmChecked] = useLocalStorage('isShortFilmChecked', false);
  // const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');
  // const [displayedMoviesCount, setDisplayedMoviesCount] = useState(screenSize.cards);
  // const moviesToShow = filteredMovies.slice(0, displayedMoviesCount);

  // useEffect(() => {
  //   setIsLoading(true);
  //   Promise.all([moviesApi.getMovies(), mainApi.getAllMovies()])
  //     .then(([moviesData, savedMovies]) => {
  //       const moviesWithSavedFlag = moviesData.map((movie) => {
  //         const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  //         return {
  //           ...movie,
  //           isSaved: Boolean(savedMovie),
  //           _id: savedMovie ? savedMovie._id : null,
  //         };
  //       });
  //       setMovies(moviesWithSavedFlag);
  //     })
  //     .catch((error) => {
  //       showError(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   setDisplayedMoviesCount(screenSize.cards);
  // }, [screenSize.cards]);

  // useEffect(() => {
  //   let resizeTimeout;
  //   const handleResize = () => {
  //     clearTimeout(resizeTimeout);
  //     resizeTimeout = setTimeout(() => {
  //       const newSize = findScreenSize(window.innerWidth);
  //       setScreenSize(newSize);
  //       setDisplayedMoviesCount(newSize.cards);
  //     }, 500);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const updatedMovies = filteredMovies.map((filteredMovie) => {
  //     const correspondingMovie = movies.find((movie) => movie.id === filteredMovie.id);
  //     if (correspondingMovie) {
  //       return {
  //         ...filteredMovie,
  //         isSaved: correspondingMovie.isSaved || false,
  //         _id: correspondingMovie._id || null,
  //       };
  //     } else {
  //       return filteredMovie;
  //     }
  //   });
  //   setFilteredMovies(updatedMovies);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [movies]);

  // const handleSaveButtonClick = (movie) => {
  //   mainApi
  //     .addMovie(movie)
  //     .then((addedMovie) => {
  //       setMovies((prevMovies) =>
  //         prevMovies.map((film) =>
  //           film.id === addedMovie.movieId
  //             ? {
  //                 ...film,
  //                 isSaved: true,
  //                 _id: addedMovie._id,
  //               }
  //             : film,
  //         ),
  //       );
  //     })
  //     .catch((error) => {
  //       showError(error);
  //     });
  // };

  // function handleDelete(movieId) {
  //   onDelete(movieId);
  //   setMovies((prev) =>
  //     prev.map((film) =>
  //       film._id === movieId
  //         ? {
  //             ...film,
  //             isSaved: false,
  //             _id: null,
  //           }
  //         : film,
  //     ),
  //   );
  // }

  // const handleFilter = (check) => {
  //   setNoResults(false);
  //   if (!searchQuery && filteredMovies.length === 0) return;
  //   const filtered = updateFilteredMovies(movies, searchQuery, check);
  //   return filtered.length > 0 ? setFilteredMovies(filtered) : setNoResults(true);
  // };

  // const handleShortFilmChange = (check) => {
  //   setIsShortFilmChecked(check);
  //   handleFilter(check);
  // };

  // const handleResetSearchState = () => {
  //   setFilteredMovies([]);
  //   setSearchError(false);
  // };

  // const handleSearch = () => {
  //   handleResetSearchState();
  //   if (!searchQuery) {
  //     setSearchError(true);
  //     return;
  //   }
  //   handleFilter(isShortFilmChecked);
  // };

  // const handleLoadMore = () => {
  //   const newDisplayedCount = displayedMoviesCount + screenSize.addCardsNumber;
  //   setDisplayedMoviesCount(newDisplayedCount);
  // };

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