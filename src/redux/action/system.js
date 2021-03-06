import {GET_WEBSOCKET, RESET_LOADING, SET_LOADING} from "../reducer/system";
import socketIOClient from "socket.io-client";
import {getNewMessage, getNotification} from "./message";

export const setLoading = () => ({type: SET_LOADING})
export const resetLoading = () => ({type: RESET_LOADING})

export const getWebSocket = (id) => async dispatch => {
    const socket = socketIOClient('ws://localhost:3001', {test: `test_${id}`});
    socket.on('connect', () => {
        // console.log(socket.id)
        socket.emit('connection', id)
    })


    // socket onclose reopen here

    socket.on(`messageToClient`, data => {
        // socket.on(`messageToClient`, data => {
        // получаю сообщение - и нужно его доюавить в список сообщений в ридаксе и в локлсторе для
        // обозначения как непрочитанное
        // при заходе внутрь сообщения -  проверять и удалять из ЛС
        // при формировании списка сообщений проверять их наличие в ЛС
        // и добавлять поле isRead
        console.log('came from server', data)
        dispatch(getNotification(data))
        dispatch(getNewMessage(data))
    });
    dispatch({type: GET_WEBSOCKET, payload: socket})
}

