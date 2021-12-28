import {
    ADD_USER_DOC,
    GET_USER,
    GET_USER_CARS,
    GET_USER_PHOTO,
    REMOVE_USER,
    REMOVE_USER_DOC,
    user
} from "../reducer/user";
import {fetchData} from "../../api";


export const setUserData = data => ({type: GET_USER, payload: data})

export const setUserPhoto = photo => ({type: GET_USER_PHOTO, payload: photo})

export const addUserDoc = doc => ({type: ADD_USER_DOC, payload: doc})
export const removeUserDoc = index => ({type: REMOVE_USER_DOC, payload: index})
export const removeUser = () => ({type: REMOVE_USER})

export const getUserCars = id => async dispatch => {
    const res = await fetchData({
        method: "get",
        url: "http://localhost:8000/car",
        options: {params: {ownerId: id}},
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_USER_CARS, payload: res.data})
    } else {}
}

export const getUser = id => async dispatch => {
    const res = await fetchData({
        method: "get",
        url: `http://localhost:8000/user/${id}`,
        // options: {params: {id}},
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        const userAvatar = await getUserAvatar(res.data.photo)
        const newUser = {...res.data, avatar: userAvatar}

        dispatch({type: GET_USER, payload: newUser})
    } else {}
}

export const getUserAvatar = async id => {
    const res = await fetchData({
        method: "get",
        url: `http://localhost:8000/file/${id}`
    })
    if(res.status === 200 || res.status === 201) {
        return res.data
    } else {}
}
