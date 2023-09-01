import './AboutMe.css';
import photo from '../../../images/photo_student.jpeg';

const AboutMe = () => {
    return (
        <section className='aboutMe'>
            <div className='aboutMe__group-title'>
                <h3 className='aboutMe__title'>Студент</h3>
            </div>
            <div className='aboutMe__student-container'>
                <div className='aboutMe__text-group'>
                    <h3 className='aboutMe__name'>Анна</h3>
                    <h4 className='aboutMe__text-about'>Фронтенд-разработчик, 24 года</h4>
                    <p className='aboutMe__text-history'>
                        Я живу в Новосибирске, закончила НГТУ по направлению "Нанотехнологии и микросистемная техника" .
                        Я люблю слушать музыку, а ещё увлекаюсь бегом.
                        Недавно начала увлекатья программированием. С 2021 года работала в компании «Озон».
                        После того, как прошёл курс,
                        начал заниматься фриланс-заказами.
                    </p>
                    <a href='https://github.com/AnnaRadi' className='aboutMe__link'>GitHub</a>
                </div>
                <img src={photo} className='aboutMe__foto' alt='Фото Студента' />
            </div>
        </section>
    );
};

export default AboutMe;