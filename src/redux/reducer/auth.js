import {SET_AUTHORIZED, SET_SIGN_UP_ERROR} from "../constant";

let initialState = {
    isAuthorized: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZED:
            return {
                ...state,
                ...action.payload
            }
        case SET_SIGN_UP_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default auth;
