import {ADD_USER_DOC, GET_USER, GET_USER_PHOTO, REMOVE_USER_DOC} from "../reducer/user";

export const setUserData = data => ({type: GET_USER, payload: data})

export const setUserPhoto = photo => ({type: GET_USER_PHOTO, payload: photo})

export const addUserDoc = doc => ({type: ADD_USER_DOC, payload: doc})
export const removeUserDoc = index => ({type: REMOVE_USER_DOC, payload: index})

