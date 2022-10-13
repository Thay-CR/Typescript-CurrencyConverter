import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import { User } from '../models/User'
import { UserService } from '../services/UserService'
import authConfig from '../config/auth.json'
import bcrypt from 'bcrypt'

interface User {
    name: string
    login: string
    password: string
}

export const UserController = {

    newUser: async (req: Request, res: Response) => {
        const {
            name,
            login,
            password
        } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const result = await UserService.newUser(name, login, password)
        res.send(result)
    },

    login: async (req: Request, res: Response) => {

        const { login, password } = req.body
        let user: User | null
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            user = await User.findOne({ login })
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result) {
                        const token = jwt.sign({
                            id: 1
                        }, authConfig.secret, {
                            expiresIn: 86400,
                        })
                        res.status(200).send({
                            "msg": "success",
                            token
                        })
                    } else {
                        const msg = "Invalid Credencials"
                        return res.status(404).send({
                            "msg": msg
                        })
                    }

                })
            } else {
                const msg = "Invalid Credencials"
                return res.status(404).send({
                    "msg": msg
                })
            }
        } catch (error) {
            console.log("error find user",error)
        }



    }
}

