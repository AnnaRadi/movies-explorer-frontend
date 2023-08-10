import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <section className="searchForm__checkbox">
      <label className="searchForm__tumbler">
        <input className="searchForm__checkbox-check" type="checkbox" />
        <span className="searchForm__slider" />
      </label>
      <p className="searchForm__film">Короткометражки</p>
    </section>
  );
}
export default FilterCheckbox;