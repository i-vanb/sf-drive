const initialState = {
    current: {}
}

export const SET_DRIVE = "SET_DRIVE"
export const RESET_DRIVE = "RESET_DRIVE"
export const SET_DRIVE_LIST = "SET_DRIVE_LIST"
export const SET_CURRENT_DRIVE = "SET_CURRENT_DRIVE"
export const TOGGLE_DRIVE_OPTION = "TOGGLE_DRIVE_OPTION"

export const drive = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DRIVE_OPTION:
            return {
                ...state,
                current: {
                    ...state.current,
                    [action.payload]: !state.current[action.payload]
                }
            }
        case SET_CURRENT_DRIVE:
            return {
                ...state,
                current: {...state.current, ...action.payload}
            }
        case SET_DRIVE_LIST:
            return {
                ...state,
                list: action.payload
            }
        case SET_DRIVE:
            return {
                ...state,
                ...action.payload
            }
        case RESET_DRIVE:
            return initialState
        default: return state
    }
}
