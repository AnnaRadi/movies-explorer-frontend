import './Techs.css';

const Techs = () => {
  return (
    <section className='techs'>
      <div className='techs__group-title'>
        <h3 className='techs__title'>Технологии</h3>
      </div>
      <div className='techs__container-tech'>
        <h3 className='techs__container-tech-title'>7 технологий</h3>
        <p className='techs__container-tech-subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__group-text'>
          <li className='techs__text'>
            <p className='techs__paragr'>HTML</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>CSS</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>JS</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>React</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>Git</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>Express.js</p>
          </li>
          <li className='techs__text'>
            <p className='techs__paragr'>mongoDB</p>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Techs;