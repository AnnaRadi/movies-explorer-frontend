import { useLocation } from 'react-router-dom';
import { MoviesApi_Base_URL } from '../../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, onSave, onDelete }) => {
  
  const duration = (number) => {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}чч. ${minutes}мин.`;
  };

  const handleSaveClick = () => {
    if (movie.isSaved) {
      onDelete(movie._id);
    } else {
      onSave(movie);
    }
  };

  const handleDeleteClick = () => onDelete(movie._id);

  const location = useLocation();
  const isSavedFilmsPage = location.pathname === '/saved-movies';

  return (
    <li className='movie'>
      <a href={`${movie.trailerLink}`} className='movie__link' target='_blank' rel='noreferrer'>
        <img src={isSavedFilmsPage ? `${movie.image}` : `${MoviesApi_Base_URL}${movie.image.url}`}  className='movie__image' alt={movie.nameRU} />
      </a>
      <div className='movie__container-info'>
        <div className='movie__box'>
          <h2 className='movie__title'>{movie.nameRU}</h2>
          {isSavedFilmsPage ? (
            <button type='button' 
            className='movie__button-delete' 
            aria-label='Удалить фильм'
            onClick={handleDeleteClick}></button>
          ) : (
            <button type='button' 
            className={`movie__button-save  ${movie.isSaved ? 'movie__button-save_active' : ''}`} 
            aria-label='Сохранить карточку фильма'
            onClick={handleSaveClick}
            ></button>
          )}
        </div>
        <p className='movie__duration'>{duration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;