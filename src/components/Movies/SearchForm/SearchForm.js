import './SearchForm.css'

const SearchForm = ({ onSearch, searchAllMovies, setSearchAllMovies }) => {

    const handleSeachSubmit = (evt) => {
      evt.preventDefault();
      onSearch();
    };
  
    const handleSeachChange = (evt) => {
      setSearchAllMovies(evt.target.value);
    };
  
  return (
    <section className='searchForm' >
      <form className='searchForm__form' noValidate autoComplete='off' onSubmit={handleSeachSubmit}>
        <input className="searchForm__form-input"
         type="text"
         minLength="2"
         required
         placeholder="Фильм"
         value={searchAllMovies}
         onChange={handleSeachChange}
         autoComplete='nope'/>
        <button type='submit' className="searchForm__button" aria-label="Поиск Фильма" />
      </form>
    </section>
  );
};

export default SearchForm;