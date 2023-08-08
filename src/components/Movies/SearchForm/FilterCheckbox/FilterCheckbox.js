import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <section className="filterCheckbox__checkbox">
      <label className="searchForm__group-checkbox_tumbler">
        <input className="searchForm__group-checkbox_checkbox-check" type="checkbox" />
        <span className="searchForm__group-checkbox_slider" />
      </label>
      <p className="searchForm__group-checkbox_film">Короткометражки</p>
    </section>
  );
}
export default FilterCheckbox;