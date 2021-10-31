const initialState = {
    mark: "",
    model: "",
    number: "",
    year: "",
    id: "",
    color: "",
    vin: "",
    ownerId: "",
    engine_type: "",
    volume: "",
    power_ls: "",
    power_kvt: "",
    transmission: "",
    run: "",
    pts: "",
    sts: "",
    price_3d: "",
    price: "",
    price_5d: "",
    osago: "",
    casco: "",
    error: {},
    isLosfix: false,
    isAirbags: false,
    isHeater: false,
    isAuxCable: false,
    isBluetooth: false,
    isCruise: false,
    isConditioning: false,
    isMultimedia: false,
    isNavigation: false,
    isSeatsVentilation: false,
    isSeatsHeat: false,
    isRoofRack: false,
    isParktronic: false,
    isCamera: false,
    isChildrenSeat: false,
    isCarDelivery: false,
    isFreePlace: false,
    isFuel: false,
    childrenSeatPrice: '',
    carDelivery: '',
    freePlace: '',
    fuel: '',
    city: '',
    isCreated: false,
    docs: [],
    photos: []
}

export const SET_CAR = "SET_CAR"
export const RESET_CAR = "RESET_CAR"
export const SET_CAR_ERROR = "SET_CAR_ERROR"
export const SET_CAR_PHOTO = "SET_CAR_PHOTO"
export const SET_CAR_DOC = "SET_CAR_DOC"
export const TOGGLE_CAR_CHECK = "TOGGLE_CAR_CHECK"
export const SET_CAR_CREATED = "SET_CAR_CREATED"

export const car = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAR_PHOTO:
            return {
                ...state,
                photos: [...state.photos, action.payload]
            }
        case SET_CAR_DOC:
            return {
                ...state,
                docs: [...state.docs, action.payload]
            }
        case SET_CAR_CREATED:
            return {
                ...state,
                isCreated: action.payload
            }
        case TOGGLE_CAR_CHECK:
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        case SET_CAR_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    ...action.payload
                }
            }
        case SET_CAR:
            return {
                ...state,
                ...action.payload
            }
        case RESET_CAR:
            return {
                ...initialState,
                ownerId: action.payload
            }
        default:
            return state
    }
}
