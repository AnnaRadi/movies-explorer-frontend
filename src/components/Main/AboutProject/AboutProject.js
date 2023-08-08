import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className='aboutProject'>
      <div className='aboutProject__group-title'>
        <h3 className='aboutProject__group-title_title'>О проекте</h3>
      </div>
      <ul className='aboutProject__text-group'>
        <li className='aboutProject__text-group_title'>
          Дипломный проект включал 5 этапов
          <p className='aboutProject__text-group_subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='aboutProject__text-group_title'>
          На выполнение диплома ушло 5 недель
          <p className='aboutProject__text-group_subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='time'>
        <div className='time__start'><p className='time__start_text'>1 неделя</p></div>
        <div className='time__final'><p className='time__final_text'>4 недели</p></div>
      </div>
      <div className='time__plan'>
        <div className='time__plan_start'><p className='time__plan_start_text'>Back-end</p></div>
        <div className='time__plan_final'><p className='time__plan_final_text'>Front-end</p></div>
      </div>
    </section>
  );
};

export default AboutProject;