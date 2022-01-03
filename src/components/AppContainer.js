import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authMe} from "../redux/action/auth";
import {getWebSocket} from "../redux/action/system";


const AppContainer = (props) => {
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    // const state = useSelector(state => state);
    // console.log(state)

    useEffect(()=>{
        dispatch(authMe());
    }, [])

    useEffect(()=>{
        if(user.isAuthorized) {
            dispatch(getWebSocket(user.userID))
            // console.log(user)
        }
    }, [user])

    return <>{props.children}</>
}

export default AppContainer
