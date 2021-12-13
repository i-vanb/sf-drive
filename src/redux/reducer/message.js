const initialState = []

export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES'

export const message = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES:
            return action.payload

        default: return state
    }
}
