import './SearchForm.css'

const SearchForm = ({ onSearch, searchAllMovies, setSearchAllMovies }) => {

    const handleSeach = (evt) => {
      evt.preventDefault();
      onSearch();
    };
  
    const handleSeachMake = (evt) => {
      setSearchAllMovies(evt.target.value);
    };
  
  return (
    <section className='searchForm' >
      <form className='searchForm__form' noValidate autoComplete='off' onSubmit={handleSeach}>
        <input className="searchForm__form-input"
         type="text"
         minLength="2"
         required
         placeholder="Фильм"
         value={searchAllMovies}
         onChange={handleSeachMake}
         autoComplete='nope'/>
        <button type='submit' className="searchForm__button" aria-label="Поиск Фильма" />
      </form>
    </section>
  );
};

export default SearchForm;