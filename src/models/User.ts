import { dbConnection } from '../config/database'
import mongoose from "mongoose"

interface IUser extends mongoose.Document {
    name: string;
    login: string;
    password: string
}

const schema = new mongoose.Schema<IUser>({
    name: String,
    login: String,
    password: String
})

export const User = dbConnection.model('Users', schema)
