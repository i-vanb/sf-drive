const initialState = {
    name: '',
    mail: '',
    phone: '',
    birth_date: '',
    passport_number: '',
    passport_date: '',
    passport_vendor: '',
    passport_code: '',
    licence_number: '',
    licence_date: '',
    password: '',
    photo: '',
    docs: [],
    cars: []
}

export const GET_USER = 'GET_USER'
export const GET_USER_PHOTO = 'GET_USER_PHOTO'
export const GET_USER_CARS = 'GET_USER_CARS'
export const ADD_USER_DOC = 'ADD_USER_DOC'
export const REMOVE_USER_DOC = 'REMOVE_USER_DOC'
export const REMOVE_USER = 'REMOVE_USER'

export const user = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_USER:
            return {...initialState}
        case GET_USER_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case REMOVE_USER_DOC:
            return {
                ...state,
                docs: state.docs.filter((_, index) => index !== action.payload)
            }
        case ADD_USER_DOC:
            const newDocs = [...state.docs, action.payload]
            return {
                ...state,
                docs: newDocs
            }
        case GET_USER_PHOTO:
            return {
                ...state,
                photo: action.payload
            }
        case GET_USER:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}
