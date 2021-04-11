import * as mongoose from "mongoose";

export interface User extends mongoose.Document {
    name: string,
    mail: string,
    phone: string,
    birth_date: string,
    passport_number: string,
    passport_date: string,
    passport_vendor: string,
    passport_code: string,
    licence_number: string,
    licence_date: string,
    password?: string
}

type Entry = mongoose.Model<User & Document>;
