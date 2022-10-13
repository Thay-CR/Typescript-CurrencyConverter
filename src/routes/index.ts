import express from 'express'
import { Request, Response } from "express"
import {
    body
} from 'express-validator'
import { Auth } from '../middlewares/auth'
import { ConverterController } from '../controllers/converterController'
import { UserController } from '../controllers/UserController'

const router = express.Router();

router.get('/autocannonTests',
    async (req: Request, res: Response) => {
        res.status(200).send({ msg: "Server is running!" })
    }
);

router.post('/user',
    body('name').isLength({
        min: 4
    }),
    body('login').isEmail(),
    body('password').isLength({
        min: 6
    }),
    UserController.newUser
);

router.post('/login',
    body('login').isEmail(),
    body('password').isLength({
        min: 6
    }),
    UserController.login
);

router.use(Auth)

router.post('/converter',
    body('price').not().isEmpty().isNumeric(),
    ConverterController.Converter
)

export const usersRoute = router
