import './PageNotFound.css';
import { Link } from 'react-router-dom';
import NotFound from '../../images/error-404.svg';

function PageNotFound() {
    return (
        <section className="not-found__content">
            <img src={NotFound} alt="404"/>
            <h1 className="not-found__404">Страница не найдена</h1>
            <p className="not-found__note">К сожалению, такой страницы нет. Либо администратор сайта ее удалил, либо ее никогда не существовало. Попробуйте проверить адрес страницы или начните с Главной.</p>
            <Link to="/" className="not-found__back">На главную</Link>
        </section>
    )
}

export default PageNotFound;