import React, {useState} from "react";
import Header from "./Header";
import {useSelector} from "react-redux";
import {Sign} from "../../Register/Sign";


export const HeaderContainer = props => {
    const [isSignShow, setIsSignShow] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuthorized);
    // const state = useSelector(state => state)
    // console.log(state)

    return (
        <>
            <Header showSignHandler={setIsSignShow}/>
            {isSignShow && !isAuth ? <Sign showSignHandler={setIsSignShow}/> : null}
        </>
    )
}
