import 'dotenv/config'
import mongoose from "mongoose"

const credencials = () => {
    const db: string | undefined = process.env.MONGO_DB_URL
    return `${db}`
}

export const dbConnection = mongoose.createConnection(credencials())
