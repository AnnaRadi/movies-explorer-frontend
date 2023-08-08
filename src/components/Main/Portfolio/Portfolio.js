import './Portfolio.css';
import Footer from '../../Footer/Footer';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5 className='portfolio-title'>Портфолио</h5>
      <nav className='portfolio__group'>
        <a href='https://github.com/AnnaRadi/how-to-learn/blob/main/index.html' className='portfolio__group_content'>
          <p className='portfolio__group_text'>Статичный сайт</p>
          <p className='portfolio__group_link'>↗</p>
        </a>
        <a href='https://github.com/AnnaRadi/russian-travel/blob/main/index.html' className='portfolio__group_content'>
          <p className='portfolio__group_text'>Адаптивный сайт</p>
          <p className='portfolio__group_link'>↗</p>
        </a>
        <a href='https://github.com/AnnaRadi/react-mesto-auth/index.html' className='portfolio__group_content'>
          <p className='portfolio__group_text'>Одностраничное приложение</p>
          <p className='portfolio__group_link'>↗</p>
        </a>
      </nav>
      <Footer />
    </section>
  );
};

export default Portfolio;