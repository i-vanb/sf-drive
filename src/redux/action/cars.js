import {fetchData} from "../../api";
import {GET_CARS} from "../reducer/cars";

export const getCars = params => async dispatch => {
    const res = await fetchData({
        method: "get",
        url: "http://localhost:8000/car",
        options: {params},
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_CARS, payload: res.data})
    } else {}
}

export const createCar = car => async dispatch => {
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/car/create",
        options: car,
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_CARS, payload: res.data})
    } else {}
}

export const removeCar = id => async dispatch => {
    const res = await fetchData({
        method: "delete",
        url: "http://localhost:8000/car/remove",
        options: {id},
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_CARS, payload: res.data})
    } else {}
}

export const updateCar = car => async dispatch => {
    const res = await fetchData({
        method: "update",
        url: "http://localhost:8000/car/update",
        options: car,
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_CARS, payload: res.data})
    } else {}
}


