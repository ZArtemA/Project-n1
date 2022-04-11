import { NavLink } from 'react-router-dom';
import Burger from "../../images/burger-btn.svg";
import Close from '../../images/close-btn.svg';

import './Navigation.css';

function Navigation({onClose, isOpen, onMenuBtnClick}) {

    return (
        <>
        <div className="navigation">
            <nav className="nav__menu">
            <NavLink to="#" className="nav__link">Это меню</NavLink>
            <NavLink to="#" className="nav__link">Должно</NavLink>
            <NavLink to="#" className="nav__link">Быть</NavLink>
            <NavLink to="#" className="nav__link">Закрепленным</NavLink>
            <NavLink to="#" className="nav__link">При скролле</NavLink>
            </nav>
            <button className="nav__popup-btn" type="button" aria-label="Закрыть" onClick={onClose}>
            <img className="nav__popup-btn-img" src={Burger} alt="Открыть" onClick={onMenuBtnClick} />
                </button>
        <div className={`nav__popup ${isOpen ? 'nav__popup_opened' : ''}`}>
            <div className="nav__popup-content">
                <button className="nav__popup-btn-close" type="button" aria-label="Закрыть" onClick={onClose}>
                    <img className="nav__popup-btn-close-image" src={Close} alt="Закрыть" />
                </button>
            <nav className="nav__menu">
            <NavLink to="#" className="nav__link">Это меню</NavLink>
            <NavLink to="#" className="nav__link">Должно</NavLink>
            <NavLink to="#" className="nav__link">Быть</NavLink>
            <NavLink to="#" className="nav__link">Закрепленным</NavLink>
            <NavLink to="#" className="nav__link">При скролле</NavLink>
            </nav>
            </div>
        </div>
        </div>
        </>
            )
}
export default Navigation;