import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/Logo.svg";
import burgerMenuIcon from "../../img/burger-menu.svg";
import MobileMenu from "../MobileMenu";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/action/auth";


const Header = props => {
    const {showSignHandler} = props;
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthorized);

    const signOutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className="header">
            <a className="header__logo" href="/"><img src={logo} alt="logo" width="115px"/></a>
            <nav className="header__nav is-desktop">
            {isAuth
                ?
                <>
                    <Link className="header__nav__link is-animated" to="/bookıngs">Бронирования</Link>
                    <Link className="header__nav__link is-animated" to="/cars">Мои автомобили</Link>
                    <Link className="header__nav__link is-animated" to="/messages">Сообщения</Link>
                </>
                :
                <>
                    <Link className="header__nav__link is-animated" to="/about">О Нас</Link>
                    <Link className="header__nav__link is-animated" to="/">Условия</Link>
                    <Link className="header__nav__link is-animated" to="/faq">Частые вопросы</Link>
                </>
            }
            </nav>
            {isAuth
                ? <button onClick={signOutHandler}
                          className="header__authBtn is-animated is-desktop">Выйти</button>
                : <button onClick={() => showSignHandler(true)}
                          className="header__authBtn is-animated is-desktop">Войти</button>
            }
            {!isMobileMenuShow
            &&
            <div id="burger-menu" className="header__menu-icon is-mobile is-active">
                <button className="btn-opacity" onClick={() => setIsMobileMenuShow(true)}><img src={burgerMenuIcon}
                                                                                               alt="logo"/></button>
            </div>
            }
            {isMobileMenuShow &&
            <MobileMenu showSignHandler={showSignHandler} closeHandler={() => setIsMobileMenuShow(false)}/>}
        </div>
    )
}

export default Header;
