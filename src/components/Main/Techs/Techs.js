import './Techs.css';

const Techs = () => {
  return (
    <section className='techs'>
      <div className='techs__group-title'>
        <h3 className='techs__group-title_title'>Технологии</h3>
      </div>
      <div className='techs__container-tech'>
        <h3 className='techs__container-tech_title'>7 технологий</h3>
        <p className='techs__container-tech_subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__container-tech_group-text'>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>HTML</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>CSS</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>JS</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>React</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>Git</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>Express.js</p>
          </li>
          <li className='techs__container-tech_text'>
            <p className='techs__container-tech_text-paragr'>mongoDB</p>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Techs;