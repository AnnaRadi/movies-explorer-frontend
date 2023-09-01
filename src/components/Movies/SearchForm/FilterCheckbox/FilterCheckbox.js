import './FilterCheckbox.css'

const FilterCheckbox = ({ onCheckboxChange, isTimeMovieChecked }) => {

  const handleChange = (evt) => onCheckboxChange(evt.target.checked);

  return (
    <section className="searchForm__checkbox">
      <label className="searchForm__tumbler">
        <input className="searchForm__checkbox-check" type="checkbox"
          onChange={handleChange}
          checked={isTimeMovieChecked} />
        <span className="searchForm__slider" />
      </label>
      <p className="searchForm__film">Короткометражки</p>
    </section>
  );
}
export default FilterCheckbox;