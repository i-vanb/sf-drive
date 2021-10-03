const initialState = {
    loading: false
}

export const SET_LOADING = "SET_LOADING"
export const RESET_LOADING = "RESET_LOADING"

export const system = (state = initialState, action) => {
    switch (action.type) {
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
