import React from "react"
import {Link} from "react-router-dom"

// import "../styles/MobileMenu.css"
// import "../styles/Header.css"
import logo from "../img/Logo.svg"
import closeIcon from "../img/close.svg"
import {useSelector} from "react-redux";


const MobileMenu = props => {
    const {closeHandler, showSignHandler} = props
    const isAuth = useSelector(state => state.auth.isAuthorized);

    return (
        <div id="mobile-menu" className="menu__mobile is-mobile is-animated">
            <div className="menu__mobile__header">
                <img src={logo} alt="logo" width="115px"/>
                <button className="btn-opacity" onClick={closeHandler}>
                    <img id="close-menu" src={closeIcon} alt="logo"/>
                </button>
            </div>
            <nav className="menu__mobile__nav" onClick={closeHandler}>
                {isAuth
                    ?
                    <>
                        <Link className="menu__mobile__nav_link is-animated" to="/bookıngs">Бронирования</Link>
                        <Link className="menu__mobile__nav_link is-animated" to="/cars">Мои автомобили</Link>
                        <Link className="menu__mobile__nav_link is-animated" to="/messages">Сообщения</Link>
                    </>
                    :
                    <>
                        <Link className="menu__mobile__nav_link is-animated" to="/about">О Нас</Link>
                        <Link className="menu__mobile__nav_link is-animated" to="/">Условия</Link>
                        <Link className="menu__mobile__nav_link is-animated" to="/faq">Частые вопросы</Link>
                    </>
                }

                {/*<Link className="menu__mobile__nav_link" to="/">О Нас</Link>*/}
                {/*<Link className="menu__mobile__nav_link" to="/">Условия</Link>*/}
                {/*<Link className="menu__mobile__nav_link" to="/faq">Частые вопросы</Link>*/}
            </nav>
            <button onClick={()=> {
                closeHandler()
                showSignHandler(true)
            }}
                    className="menu__mobile__button is-mobile">Войти</button>
        </div>
    )
}


export default MobileMenu;
