import {SET_AUTHORIZED, SET_SIGN_UP_ERROR} from "../constant";
import axios from "axios";

export const login = (mail, password) => dispatch => {
    axios.post(
        "http://localhost:8000/auth/login", {mail, password})
        .then(res => {
            const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken};
            const userData = {userName: res.data.userName, userID: res.data.userID};
            setTokenPair(tokenPair);
            dispatch(setAuthorized(true, userData));
        })
        .catch(err => console.log(err))
}


export const logout = () => dispatch => {
    resetTokenPair();
    dispatch(setAuthorized(false));
}

export const setAuthorized = (isAuth = true, user) => ({type: SET_AUTHORIZED, payload: {isAuthorized: isAuth, ...user}})

export const setSignUpError = error => ({type: SET_SIGN_UP_ERROR, payload: {error}})

export const authMe = () => dispatch => {
    let accessToken = localStorage.getItem("accessToken");
    if(!accessToken) return;

    axios.post(
        "http://localhost:8000/auth/me", {"accessToken": accessToken})
        .then(({data}) => {
            dispatch(setAuthorized(true, data))
        })
        .catch(() => dispatch(refreshMe()))
}

export const refreshMe = () => dispatch => {
    let refreshToken = localStorage.getItem("refreshToken");
    if(!refreshToken) return;

    axios.post(
        "http://localhost:8000/auth/me/refresh", {"refreshToken": refreshToken})
        .then(res => {
            const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
            const userData = {userName: res.data.userName, userID: res.data.userID}
            setTokenPair(tokenPair);
            dispatch(setAuthorized(true, userData));
        })
        .catch(err => console.warn(err))
}

export const setTokenPair = tokenPair => {
    localStorage.setItem("accessToken", tokenPair.accessToken);
    localStorage.setItem("refreshToken", tokenPair.refreshToken);
}

export const resetTokenPair = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
}

//             name, mail, phone,
//             birth_date: birthDate,
//             passport_number: numPassport,
//             passport_date: datePassport,
//             passport_vendor: orgPassport,
//             passport_code: codePassport,
//             licence_number: numLicence,
//             licence_date: dateLicence,
//             password

export const signUp = user => dispatch => {
    axios.post(
        "http://localhost:8000/auth/signup", user)
        .then(res => {
            const tokenPair = {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
            const userData = {userName: res.data.userName, userID: res.data.userID}
            setTokenPair(tokenPair);
            console.log(tokenPair, userData)
            dispatch(setAuthorized(true, userData));
            dispatch(setSignUpError(""));
        })
        .catch(err => {
            console.dir(err)
            dispatch(setSignUpError("Ошибка сервера"))
        })
}
