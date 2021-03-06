import {
    RESET_CAR,
    SET_CAR,
    SET_CAR_ERROR,
    SET_CAR_PHOTO,
    TOGGLE_CAR_CHECK,
    SET_CAR_CREATED,
    SET_CAR_DOC
} from "../reducer/car";
import {fetchData} from "../../api";
import {getUserCars} from "./user";

export const setCar = update => ({type: SET_CAR, payload: update})
export const toggleCar = name => ({type: TOGGLE_CAR_CHECK, payload: name})

export const setError = error => ({type: SET_CAR_ERROR, payload: error})
export const setCreated = is => ({type: SET_CAR_CREATED, payload: is})

export const setCarPhoto = file => ({type: SET_CAR_PHOTO, payload: file})
export const setCarDoc = file => ({type: SET_CAR_DOC, payload: file})

export const resetCar = (ownerId = '') => dispatch => {
    dispatch({type: RESET_CAR, payload: ownerId})
}

export const createCarInGraphQL = async (car) => {}

export const transportCarToServer = car => {
    return {
        city: car.city,
        color: car.color,
        docs: car.docs.map(i => i.toString()),
        engine_type: car.engine_type,
        mark: car.mark,
        model: car.model,
        number: car.number,
        ownerId: car.ownerId.toString(),
        photos: car.photos.map(i => i.toString()),
        options: car.options.map(i => i.toString()),
        power_kvt: car.power_kvt,
        power_ls: car.power_ls,
        price: parseInt(car.price),
        price_3d: parseInt(car.price_3d),
        price_5d: parseInt(car.price_5d),
        pts: car.pts,
        run: car.run,
        sts: car.sts,
        transmission: car.transmission,
        vin: car.vin,
        volume: car.volume,
        year: car.year,
    }
}


export const createFilesArray = filesArray => async dispatch => {
    const files = filesArray.map(async (file, index)=>{
        const res_file = await fetchData({
            method: "post",
            url: "http://localhost:8000/files/car/create",
            options: file,
            dispatch
        })
        if(res_file.status === 201 || res_file.status === 200) {
            return res_file.data.id
        }
    })
    return await Promise.all(files)
}

export const createCar = car => async dispatch => {
    const resDocs = await dispatch(createFilesArray(car.docs))
    const resPhotos = await dispatch(createFilesArray(car.photos))

    const newCar = {...car, photos: resPhotos, docs: resDocs}
    const res = await fetchData({
        method: "post",
        url: "http://localhost:8000/car/create",
        options: newCar,
        dispatch
    })
    if(res.status === 201 || res.status === 200) {
        dispatch(setCreated(true))
        dispatch(getUserCars(car.ownerId))
    } else {}
}

export const getImageTEST = async (id, dispatch) => {
    const res = await fetchData({
        method: "get",
        url: `http://localhost:8000/files/car/${id}`,
        dispatch
    })
    if(res.status === 200) {
        return res.data
    }
}

const getArrayFiles = async (id, dispatch) => {
    const ids = typeof id === "object" ? id : [id]
    const files = ids.map(async i => {
        const res = await fetchData({
            method: "get",
            url: `http://localhost:8000/files/car/${i}`,
            dispatch
        })
        if(res.status === 200) {
            return res.data[0]
        }
    })

    return await Promise.all(files)
}

export const getFiles = (id, type) => async dispatch => {
    const files = await getArrayFiles(id, dispatch)
    // const ids = typeof id === "object" ? id : [id]
    // const files = ids.map(async i => {
    //     const res = await fetchData({
    //         method: "get",
    //         url: `http://localhost:8000/files/car/${i}`,
    //         dispatch
    //     })
    //     if(res.status === 200) {
    //         return res.data
    //     }
    // })
    //
    // await Promise.all(files)
    dispatch({type: `SET_CAR_${type.toUpperCase()}_FILES`, payload: files})
}
