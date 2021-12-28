import {
    GET_BOOKING,
    GET_BOOKING_LIST,
    GET_NEW_CURRENT_BOOKING,
    REMOVE_CURRENT_BOOKING,
    UPDATE_CURRENT_BOOKING
} from "../reducer/booking";
import {fetchData} from "../../api";
import {parse} from "graphql";

export const updateCurrentBooking = update => ({type: UPDATE_CURRENT_BOOKING, payload: update})
const getBookingList = list => ({type: GET_BOOKING_LIST, payload: list})
const getCurrentBooking = booking => ({type: GET_BOOKING_LIST, payload: booking})
export const removeCurrentBooking = () => ({type: REMOVE_CURRENT_BOOKING})
export const getNewCurrentBooking = props => ({type: GET_NEW_CURRENT_BOOKING, payload: props})

export const getBooking = id => async dispatch => {
    const res = fetchData({
        method: 'post',
        url: 'http://localhost:8000/booking/find',
        options: {id},
        dispatch
    })
    if(res.status === 200) {
        const payload = res.data
        dispatch({type: GET_BOOKING, payload})
    }
}

export const getAllBooking = id => async dispatch => {
    const res = await fetchData({
        method: 'get',
        url: 'http://localhost:8000/booking/all',
        options: {params: {id}},
        dispatch
    })

    if(res.status === 200) {
        dispatch(getBookingList(res.data))
        // const payload = res.data
        // dispatch({type: GET_BOOKING, payload})
    }
}

export const createBooking = (booking, ws) => async dispatch => {
    // console.log(booking)
    const res = await fetchData({
        method: 'post',
        url: 'http://localhost:8000/booking/create',
        options: booking,
        dispatch
    })
    if(res.status === 200 || res.status === 201) {
        const mesRes = await fetchData({
            method: 'post',
            url: 'http://localhost:8000/message/create',
            options: {
                fromId: parseInt(booking.passengerID),
                toId: parseInt(booking.ownerID),
                toUsername: "",
                toEmail: "",
                carId: parseInt(booking.carID),
                date: Date.now().toString(),
                subject: "Аренда автомобиля",
                text: booking.description.length>0 ? booking.description:`По поводу аренды вашего автомобиля`,
                chat_id: ""
            },
            dispatch
        })
        if(mesRes.status === 200 || mesRes.status === 201){
            console.log(mesRes)
            // send to websocket
            ws.emit('messageToServer', {id: mesRes.data.toId, message: mesRes.data})
            // прменять id на toId
        }
        const payload = res.data
        dispatch({type: GET_BOOKING, payload})
    }
}
