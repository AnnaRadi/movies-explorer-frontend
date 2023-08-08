import React from 'react';
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

const SearchForm = () => {
  return (
    <section className='searchForm'>
      <form className='searchForm__form' >
        <input type='text' className="seachForm__form_input" minLength="2" required placeholder="Фильм" />
        <button type='submit' className="searchForm__form_button" aria-label="Поиск Фильма" />
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;