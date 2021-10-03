import {combineReducers} from "redux";
import auth from "./auth";
import {system} from "./system";
import {cars} from "./cars";
import {car} from "./car";
import {user} from "./user";

export const reducers = combineReducers({
    auth, system, cars, car, user
})
