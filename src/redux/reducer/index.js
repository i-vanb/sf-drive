import {combineReducers} from "redux";
import auth from "./auth";
import {system} from "./system";
import {cars} from "./cars";
import {car} from "./car";
import {user} from "./user";
import {drive} from "./drive";
import {message} from "./message";
import {booking} from "./booking";

export const reducers = combineReducers({
    auth, system, cars, car, user, drive, message, booking
})
