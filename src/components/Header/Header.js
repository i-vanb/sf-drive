import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import Link from "next/link";
import Image from "next/image"
import {Link} from '../../utils/Link'
import logo from "../../img/Logo.svg";
import burgerMenuIcon from "../../img/burger-menu.svg";
import MobileMenu from "../MobileMenu";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/action/auth";
import {useRouter} from "next/router";


const Header = props => {
    const {showSignHandler} = props;
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter()
    const isAuth = useSelector(state => state.auth.isAuthorized);
    const user = useSelector(state => state.user)

    // console.log(user)

    const signOutHandler = () => {
        dispatch(logout());
    }

    const goToProfile = () => {
        router.push('/profile')
    }
    // console.log(user)

    return (
        <div className="header">
            <Link className="header__logo" to="/"><Image src={logo} alt="logo" width="115px"/></Link>
            <nav className="header__nav is-desktop">
            {isAuth
                ?
                <>
                    <Link className="header__nav__link is-animated" to="/bookings">Бронирования</Link>
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
            {/*<img src={`data:${photo.mimetype};base64,${Buffer.from(photo.buffer).toString('base64')}`} />*/}
            {isAuth && <div className="avatar-wrapper" onClick={goToProfile}>
                {/*<span className="user-name">{user.name}</span>*/}
                {user.avatar && !!user.avatar.length
                ? <img src={`data:${user.avatar[0].mimetype};base64,${Buffer.from(user.avatar[0].buffer).toString('base64')}`} className="user-avatar" />
                : <div className="avatar-wrapper"><span className="no-avatar"/></div>
                }
            </div>}

            {/*{isAuth && user.avatar && !!user.avatar.length*/}
            {/*    ? <div className="avatar-wrapper"><Image src={`data:${user.avatar[0].mimetype};base64,${Buffer.from(user.avatar[0].buffer).toString('base64')}`} className="user-avatar" /></div>*/}
            {/*    : <div className="avatar-wrapper"><span className="no-avatar"/></div>}*/}

            {isAuth
                ? <button onClick={signOutHandler}
                          className="header__authBtn is-animated is-desktop">Выйти</button>
                : <button onClick={() => showSignHandler(true)}
                          className="header__authBtn is-animated is-desktop">Войти</button>
            }
            {!isMobileMenuShow
            &&
            <div id="burger-menu" className="header__menu-icon is-mobile is-active">
                <button className="btn-opacity" onClick={() => setIsMobileMenuShow(true)}>
                    <Image src={burgerMenuIcon} alt="logo"/></button>
            </div>
            }
            {isMobileMenuShow &&
            <MobileMenu showSignHandler={showSignHandler} closeHandler={() => setIsMobileMenuShow(false)}/>}
        </div>
    )
}

export default Header;
