import {RESET_DRIVE, SET_CURRENT_DRIVE, SET_DRIVE, SET_DRIVE_LIST, TOGGLE_DRIVE_OPTION} from "../reducer/drive";

export const setDrive = drive => ({type: SET_DRIVE, payload: drive})
export const resetDrive = () => ({type: RESET_DRIVE})
export const setDriveList = list => ({type: SET_DRIVE_LIST, payload: list})
export const setCurrentDrive = drive => ({type: SET_CURRENT_DRIVE, payload: drive})
export const toggleDriveOption = option => ({type: TOGGLE_DRIVE_OPTION, payload: option})
