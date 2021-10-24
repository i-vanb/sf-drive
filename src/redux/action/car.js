import {RESET_CAR, SET_CAR, SET_CAR_ERROR, SET_CAR_PHOTO, TOGGLE_CAR_CHECK, SET_CAR_CREATED} from "../reducer/car";
import {setLoading} from "./system";
import {fetchData} from "../../api";
import {setAuthorized, setSignUpError, setTokenPair} from "./auth";
import {getUserCars} from "./user";

export const setCar = update => ({type: SET_CAR, payload: update})
export const toggleCar = name => ({type: TOGGLE_CAR_CHECK, payload: name})

export const setError = error => ({type: SET_CAR_ERROR, payload: error})
export const setCreated = is => ({type: SET_CAR_CREATED, payload: is})

export const setCarPhoto = (file) => dispatch => {
    // dispatch({type: SET_CAR_PHOTO, payload: file})
}

export const resetCar = ownerId => ({type: RESET_CAR, payload: ownerId})

export const createCar = (car) => async dispatch => {
    // dispatch(setLoading())
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/car/create",
        options: {...car, ownerId: 1},
        dispatch
    })
    if(res.status === 201 || res.status === 200) {
        dispatch(setCreated(true))
        dispatch(getUserCars(car.ownerId))
    } else {}
}
