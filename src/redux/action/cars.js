import {fetchData} from "../../api";
import {GET_CARS} from "../reducer/cars";
import {getUserCars} from "./user";
import {useQuery} from "@apollo/client";
import {FETCH_CARS_BY_CITY_QUERY} from "../../utils/graphql-request";


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

export const getFilteredCars = cars => ({type: GET_CARS, payload: cars})

export const createCar = car => async dispatch => {
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/car/create",
        options: car,
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        dispatch({type: GET_CARS, payload: res.data})
        dispatch(getUserCars(car.ownerId))
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


