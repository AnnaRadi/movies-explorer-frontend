import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__container-title'>
                <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            </div>
            <div className='footer__group'>
                <p className="footer__group-year">© 2020</p>
                <nav className="footer__group-link">
                    <a className='footer__group-link_link footer__group-link_link-first' href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className='footer__group-link_link footer__group-link_link-second' href="https://github.com/git-guides" target="_blank" rel="noreferrer">Github</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
