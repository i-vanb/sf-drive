import {applyMiddleware,
    compose,
    createStore} from "redux";
import ReduxThunk from "redux-thunk";
import {reducers} from "./reducer";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
