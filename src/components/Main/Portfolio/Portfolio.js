import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <nav className='portfolio__group'>
        <a href='https://github.com/AnnaRadi/how-to-learn/blob/main/index.html' target="_blank" rel="noreferrer" className='portfolio__group-content'>
          <p className='portfolio__group-text'>Статичный сайт</p>
          <p className='portfolio__group-link'>↗</p>
        </a>
        <a href='https://github.com/AnnaRadi/russian-travel/blob/main/index.html' target="_blank" rel="noreferrer" className='portfolio__group-content'>
          <p className='portfolio__group-text'>Адаптивный сайт</p>
          <p className='portfolio__group-link'>↗</p>
        </a>
        <a href='https://github.com/AnnaRadi/react-mesto-auth/index.html' target="_blank" rel="noreferrer" className='portfolio__group-content'>
          <p className='portfolio__group-text'>Одностраничное приложение</p>
          <p className='portfolio__group-link'>↗</p>
        </a>
      </nav>
    </section>
  );
};

export default Portfolio;