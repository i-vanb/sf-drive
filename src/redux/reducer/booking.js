const initialState = {
    list: [],
    current: {
        id: null,
        passengerID: '',
        carID: null,
        ownerID: null,
        begin: '',
        end: '',
        duration: '',
        description: '',
        isCarDelivery: false,
        totalPrice: null,
        carDeliveryPrice: 1000,
        isChildSeat: false,
        childSeatPrice: 1000,
        isAnyPlaceEnd: false,
        anyPlaceEndPrice: 1000,
        isArchived: false,
        mark: '',
        model: '',
        year: null,
        expires_in: '',
        is_payed: false
    },
    busyDates: []
}

export const GET_BOOKING_LIST = 'GET_BOOKING_LIST'
export const GET_BOOKING = 'GET_BOOKING'
export const REMOVE_CURRENT_BOOKING = 'REMOVE_CURRENT_BOOKING'
export const UPDATE_CURRENT_BOOKING = 'UPDATE_CURRENT_BOOKING'
export const GET_NEW_CURRENT_BOOKING = 'GET_NEW_CURRENT_BOOKING'
export const GET_BUSY_DATES_BOOKING = 'GET_BUSY_DATES_BOOKING'

export const booking = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUSY_DATES_BOOKING:
            return {
                ...state,
                busyDates: action.payload
            }
        case GET_BOOKING_LIST:
            return {
                ...state,
                list: action.payload
            }
        case GET_BOOKING:
            return {
                ...state,
                current: action.payload
            }
        case UPDATE_CURRENT_BOOKING:
            return {
                ...state,
                current: {...state.current, ...action.payload}
            }
        case REMOVE_CURRENT_BOOKING:
            return {
                ...state,
                current: initialState
            }
        case GET_NEW_CURRENT_BOOKING:
            return {
                ...state,
                current: initialState.current
            }
        default: return state
    }
}
