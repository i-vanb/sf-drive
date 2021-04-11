import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    name: String,
    mail: String,
    phone: String,
    birth_date: String,
    passport_number: String,
    passport_date: String,
    passport_vendor: String,
    passport_code: String,
    licence_number: String,
    licence_date: String,
    password: String
})
