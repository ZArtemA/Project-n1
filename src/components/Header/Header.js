import { useLocation } from "react-router-dom";
import './Header.css';

import Navigation from '../Navigation/Navigation';
import Logo from '../../images/Logo.svg';



function Header({ isOpen, onClose, onMenuBtnClick }) {

    let pathname = useLocation().pathname;
    
    return (
        <header className="header">
            <Logo/>
            <Navigation
            isOpen={isOpen}
            onClose={onClose}
            onMenuBtnClick={onMenuBtnClick}
            />
            <button name="button" value={pathname === "/" ? "Модалка" : "Отправить"} />
        </header>
    );
}
export default Header;