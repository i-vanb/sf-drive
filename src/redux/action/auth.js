import {SET_AUTHORIZED, SET_SIGN_UP_ERROR} from "../constant";
import {fetchData} from "../../api";
import {setLoading} from "./system";


export const login = (mail, password) => async dispatch => {
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/auth/login",
        options: {mail, password},
        dispatch
    })
    console.log(res)
    if (res.status === 201) {
        const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken};
        const userData = {userName: res.data.userName, userID: res.data.userID};
        setTokenPair(tokenPair);
        dispatch(setAuthorized(true, userData));
    } else {
        dispatch(setSignUpError(res.data.message))
    }

}


export const logout = () => dispatch => {
    resetTokenPair();
    dispatch(setAuthorized(false));
}

export const setAuthorized = (isAuth = true, user) => ({type: SET_AUTHORIZED, payload: {isAuthorized: isAuth, ...user}})

export const setSignUpError = error => ({type: SET_SIGN_UP_ERROR, payload: {error}})

export const authMe = () => async dispatch => {
    let accessToken = localStorage.getItem("accessToken");
    if(!accessToken) return;

    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/auth/me",
        options: {"accessToken": accessToken},
        dispatch
    })

    if(res.status === 201 || res.status === 200) {
        dispatch(setAuthorized(true, res.data))
    } else {
        dispatch(refreshMe())
    }
}

export const refreshMe = () => async dispatch => {
    let refreshToken = localStorage.getItem("refreshToken");
    if(!refreshToken) return;

    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/auth/me/refresh",
        options: {"refreshToken": refreshToken},
        dispatch
    })
    if(res.status === 201 || res.status === 200) {
        const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
        const userData = {userName: res.data.userName, userID: res.data.userID}
        setTokenPair(tokenPair);
        dispatch(setAuthorized(true, userData));
    } else {

    }
}

export const setTokenPair = tokenPair => {
    localStorage.setItem("accessToken", tokenPair.accessToken);
    localStorage.setItem("refreshToken", tokenPair.refreshToken);
}

export const resetTokenPair = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
}

export const signUp = user => async dispatch => {
    dispatch(setLoading())
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/auth/signup",
        options: user,
        dispatch
    })
    if(res.status === 201 || res.status === 200) {
        const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
        const userData = {userName: res.data.userName, userID: res.data.userID}
        setTokenPair(tokenPair);
        dispatch(setAuthorized(true, userData));
        dispatch(setSignUpError(""));
    } else {
        dispatch(setSignUpError("Ошибка сервера"))
    }


    // axios.post(
    //     "http://localhost:8000/auth/signup", user)
    //     .then(res => {
    //         const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
    //         const userData = {userName: res.data.userName, userID: res.data.userID}
    //         setTokenPair(tokenPair);
    //         console.log(tokenPair, userData)
    //         dispatch(setAuthorized(true, userData));
    //         dispatch(setSignUpError(""));
    //     })
    //     .catch(err => {
    //         console.dir(err)
    //         dispatch(setSignUpError("Ошибка сервера"))
    //     })
}
