import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10);
import { User } from '../models/User'

export const UserService = {

    newUser: async (name: string, login: string, password: string | Buffer) => {
        let msg: string;
        try {
            const user = await User.findOne({ login })
            if (user) {
                msg = "Usuário já cadastrado"
                return {
                    msg: msg
                }
            }
            const userCreated = await User.create({
                name: name,
                login: login,
                password: bcrypt.hashSync(password, salt)
            })
            msg = userCreated._id ? "Usuário cadastrado com sucesso!" : "Erro ao cadastrar Usuário"
            return {
                msg: msg
            }
        } catch (error) {
            console.log("error", error)

        }
    }
}

