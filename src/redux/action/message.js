import {
    CREATE_MESSAGE,
    GET_ALL_MESSAGES,
    GET_CHATS,
    GET_NEW_MESSAGE,
    GET_NOTIFICATION, GET_NOTIFICATION_LIST,
    REMOVE_NOTIFICATION,
    RESET_MESSAGES
} from "../reducer/message";
import {fetchData} from "../../api";
import {user} from "../reducer/user";
import {GET_NEW_CURRENT_BOOKING} from "../reducer/booking";

export const resetMessages = () => ({type: RESET_MESSAGES})

export const getMessages = (chat_id, user_id) => async dispatch => {
    const res = await fetchData({
        method: 'get',
        url: `http://localhost:8000/message/${chat_id}`
    })

    if(res.status === 200) {
        const unreadLS = JSON.parse(localStorage.getItem('messages'))
        // const unreadMessages = unreadLS ? unreadLS : []
        // console.log(chat_id, unreadLS)
        if(unreadLS) {
            const unreadMessages = unreadLS.filter(i => parseInt(i.chat_id) !== parseInt(chat_id))
            localStorage.setItem('messages', JSON.stringify(unreadMessages))
            dispatch(getNotificationList(unreadMessages))
        }
        dispatch({type: GET_ALL_MESSAGES, payload: getListMessages(res.data, user_id)})
    }
    // if(res.status === 200) dispatch({type: GET_ALL_MESSAGES, payload: getListMessages(dump_chat, user_id)})
    // if(res.status === 200) dispatch({type: GET_ALL_MESSAGES, payload: {messages: res.data}})
}

export const sendMessage = ({message, from, to, chat_id, ws, carId}) => async dispatch => {
    // console.log(from, message, to)
    const mesRes = await fetchData({
        method: 'post',
        url: 'http://localhost:8000/message/create',
        options: {
            fromId: parseInt(from),
            toId: parseInt(to),
            toUsername: "",
            toEmail: "",
            carId: parseInt(carId),
            date: Date.now().toString(),
            subject: "Аренда автомобиля",
            text: message,
            chat_id: parseInt(chat_id)
        },
        dispatch
    })
    if(mesRes.status === 200 || mesRes.status === 201){
        const newMessage = {
            message: mesRes.data.text,
            me: true,
            date: mesRes.data.date,
            id: mesRes.data.id
        }
        dispatch({type: CREATE_MESSAGE, payload: newMessage})
        ws.emit('messageToServer', {id: to, message: mesRes.data})
    }

}

const getListMessages = (messages, user_id) => {
    // const reversedMessages = messages.reverse()
    const reversedMessages = messages
    const user_info = {}
    const newMessages =  reversedMessages.map((i, index) => {
        if(!user_info.toId) user_info.toId = i.fromId === user_id ? i.toId : i.fromId
        return {message: i.text, me: i.fromId === user_id, date: i.date, id: i.id}
    })
    return {messages: newMessages, user_info}
}

export const getChats = id => async dispatch => {
    const res = await fetchData({
        method: 'get',
        url: `http://localhost:8000/chat/${id}`,
        // options: {params: {id}},
        dispatch
    })
    if (res.status === 200 || res.status === 201) {
        const unreadLS = JSON.parse(localStorage.getItem('messages'))
        const unreadMessages = unreadLS ? unreadLS : []
        console.log(unreadMessages)
        const data = res.data.map(async i => {
            const hasUnread = unreadMessages.filter(m => m.chat_id == i.id).length > 0
            const userID = i.fromId === id ? i.toId : i.fromId

            const userData = await fetchData({
                method: "get",
                url: `http://localhost:8000/user/${userID}`,
                dispatch
            })
            return {...i, name: userData.data.name, photo: userData.data.photo, hasUnread}

        })


        const payload = await Promise.all(data)
        dispatch({type: GET_CHATS, payload})
    }

    // dispatch({type: GET_CHATS, payload: dump_chats})
}


export const createChat = chat => async dispatch => {
    const res = await fetchData({
        method: 'post',
        url: 'http://localhost:8000/chat/create',
        options: chat,
        dispatch
    })
    if (res.status === 200 || res.status === 201) {
        // console.log(res.data)
        // const payload = res.data
        // dispatch({type: GET_BOOKING, payload})
    }
}


export const getNotification = message => ({type: GET_NOTIFICATION, payload: message})
export const getNotificationList = list => ({type: GET_NOTIFICATION_LIST, payload: list})
export const removeNotification = id => ({type: REMOVE_NOTIFICATION, payload: id})

export const getNewMessage = message => dispatch => {
    const newMessage = {
        date: message.date,
        id: message.id,
        me: false,
        message: message.text
    }

    const unreadMessages = JSON.parse(localStorage.getItem('messages'))
    const newUnreadMessages = unreadMessages ? [...unreadMessages, message] : [message]
    localStorage.setItem('messages', JSON.stringify(newUnreadMessages))
    dispatch({type: GET_NEW_MESSAGE, payload: newMessage})
}
