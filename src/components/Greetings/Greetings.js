import './Greetings.css';
import Shake from "../../images/shake.png";
import Main from "../../images/main.png";
import Small from "../../images/main-small.png";
import Medium from "../../images/main-medium.png";
import Phone from "../../images/main-medium.svg";

function Greetings() {

    return (
    <section className="greetings">
        <div className="greetings__block-text">
        <div className="greetings__title-row">
        <img className="smile" src={Shake} alt="Привет" />
        <h1 className="greetings__title">Привет!</h1>
        </div>
        <p className="greetings__text">Группа компаний Freematiq и MITRA ищет себе клевого верстальщика. На постоянную работу в офисе или периодическую  работу по удаленке. Хотим предложить тебе вместо скучных тестовых заданий – сверстать эту страницу.</p>
        <p className='greetings__subtitle'>В своей работе мы используем:</p>
        <ul className='greetings__list'>
            <li>HTML5, CSS3</li>
            <li>Bootstrap 4</li>
            <li>Jade, Pug</li>
            <li>Less, SCSS</li>
            <li>Иконочные шрифты</li>
            <li>SVG иллюстрации</li>
        </ul>
        <p className="greetings__text">Не ограничиваем этими технологиями, верстай как удобно.</p>
        </div>
        <div className="greetings__block-img">
        <img className="greetings__block-img__phone" src={Phone} />
        <img className="greetings__block-img__image" src={Main} srcSet={`${Small} 300px, ${Medium} 768px`} alt="Рабочий процесс" />
        </div>
    </section>
    )
}
export default Greetings;