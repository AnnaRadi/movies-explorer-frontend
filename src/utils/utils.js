import { ScreenSize_Map } from './constants';

const updateFiltered = (movies, query, checked) => {
  let filteredResults = [];

  filteredResults = movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase()),
  );
  if (checked) {
    filteredResults = filteredResults.filter((movie) => movie.duration <= 40);
  }

  return filteredResults;
};

const findScreenSizeMap = (screenWidth) => {
  if (screenWidth >= 1200) {
    return ScreenSize_Map.xl;
  } else if (screenWidth >= 900) {
    return ScreenSize_Map.lg;
  } else if (screenWidth >= 600) {
    return ScreenSize_Map.md;
  } else {
    return ScreenSize_Map.sm;
  }
};

export { updateFiltered, findScreenSizeMap };