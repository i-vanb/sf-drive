const initialState = {
    list: []
}

export const GET_CARS = "GET_CARS"

export const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
