import filmList from "../../utils/filmListSaved.json";
import Header from '../Header/Header'
import SeachForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className="saved__container">
        <SeachForm />
        <MoviesCardList filmList={filmList} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;