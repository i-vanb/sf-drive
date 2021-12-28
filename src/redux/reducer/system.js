const initialState = {
    loading: false,
    ws: undefined
}

export const SET_LOADING = "SET_LOADING"
export const RESET_LOADING = "RESET_LOADING"
export const GET_WEBSOCKET = "GET_WEBSOCKET"

export const system = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEBSOCKET:
            return {
                ...state,
                ws: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case RESET_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;

    }
}
