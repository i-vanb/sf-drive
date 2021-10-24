import {ADD_USER_DOC, GET_USER, GET_USER_CARS, GET_USER_PHOTO, REMOVE_USER_DOC} from "../reducer/user";
import {fetchData} from "../../api";
import {GET_CARS} from "../reducer/cars";

export const setUserData = data => ({type: GET_USER, payload: data})

export const setUserPhoto = photo => ({type: GET_USER_PHOTO, payload: photo})

export const addUserDoc = doc => ({type: ADD_USER_DOC, payload: doc})
export const removeUserDoc = index => ({type: REMOVE_USER_DOC, payload: index})

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
