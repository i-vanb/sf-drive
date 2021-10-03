import {ObjectID} from "typeorm";

export interface TokenPair {
    accessToken: string,
    refreshToken: string
}

export interface TokenPayload {
    userName: string,
    userID: number
    // userID: ObjectID
}
