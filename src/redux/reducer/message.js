const initialState = {
    chats: [],
    current: {
        user_info: {},
        messages: [],
    },
    notification: []
}

export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES'
export const RESET_MESSAGES = 'RESET_MESSAGES'
export const GET_CHATS = 'GET_CHATS'
export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const GET_NOTIFICATION = 'GET_NOTIFICATION'
export const GET_NOTIFICATION_LIST = 'GET_NOTIFICATION_LIST'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
export const GET_NEW_MESSAGE = 'GET_NEW_MESSAGE'


export const message = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION_LIST:
            return {
                ...state,
                notification: action.payload
            }
        case GET_NEW_MESSAGE:
            // console.log('CHECK IN GET_NEW - ', state, action.payload)
            // if(!state.current.user_info.toId || state.current.user_info.toId !== action.payload.fromId) return state
            return {
                ...state,
                current: {
                    ...state.current,
                    messages: [...state.current.messages, action.payload]
                }
            }
        case GET_NOTIFICATION:
            return {
                ...state,
                notification: [...state.notification, action.payload]
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                notification: state.notification.filter(i => i.id !== action.payload)
            }
        case RESET_MESSAGES:
            return {
                ...state,
                current: {
                    ...state.current,
                    messages: []
                }
            }
        case CREATE_MESSAGE:
            return {
                ...state,
                current: {
                    ...state.current,
                    messages: [...state.current.messages, action.payload]
                }
            }
        case GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case GET_ALL_MESSAGES:
            return {
                ...state,
                current: {
                    ...state.current,
                    user_info: action.payload.user_info,
                    messages: action.payload.messages
                }
            }
        default: return state
    }
}
