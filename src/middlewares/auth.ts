
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express"
import authConfig from '../config/auth.json'

export const Auth = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization
    if (!authHeader)
        return res.status(401).send({ error: 'token user invalid' })

    const parts = authHeader.split(' ')
    if (parts.length != 2)
        return res.status(401).send({ error: 'token user invalid' })

    const [scheme, token] = parts
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'token user invalid' })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'token user invalid' })
        return next()
    })


}
