import socketIOClient from "socket.io-client";
import {GET_NOTIFICATION} from "../redux/reducer/message";
import {getNewMessage, getNotification} from "../redux/action/message";


export const initSocket = async ({id, dispatch}) => {
    const socket = socketIOClient('ws://localhost:3001');
    socket.on(`messageToClient_${id}`, data => {
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
    // socket.emit('messageToServer', {id, message: {text: 'test text'}})
    // socket.emit('messageToServer', 'Hi you')
}
