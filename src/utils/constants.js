const MainApi_URL = "https://api.aradion0va.nomoreparties.sbs";
// const MainApi_URL = "http://localhost:4000";
const MoviesApi_Base_URL = 'https://api.nomoreparties.co/';

const MoviesApi_URL = `${MoviesApi_Base_URL}beatfilm-movies`;

const authPages = ['/movies', '/saved-movies', '/profile'];

const ScreenSizeMap = {
  xl: { cards: 16, addCardsNumber: 4 },
  lg: { cards: 8, addCardsNumber: 2 },
  md: { cards: 5, addCardsNumber: 2 }
};

const MaxScreenSize = 1150;
const MinScreenSize = 720;

const ShortFilmDuration = 40;

export {
  MainApi_URL,
  MoviesApi_URL,
  MoviesApi_Base_URL,
  authPages,
  ScreenSizeMap,
  ShortFilmDuration,
  MaxScreenSize,
  MinScreenSize,
};
