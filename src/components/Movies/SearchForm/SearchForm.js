import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

const SearchForm = ({onSubmit,  searchQuery,}) => {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({ mode: 'onSubmit' });

  useEffect(() => setValue('query', searchQuery),);

  const [ setIsInputFocused] = useState(false);

  const submit = (data) => onSubmit(data.query);
  return (
    <section className='searchForm' >
      <form className='searchForm__form' onSubmit={handleSubmit(submit)}>
        <input className="searchForm__form-input" minLength="2" 
        {...register('query', {
          required: 'Введите название фильма',
        })}
        placeholder='Фильм'
        type='text'
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}/>
        <button type='submit' className="searchForm__button" aria-label="Поиск Фильма" />
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;