import 'dotenv/config'
import { Request, Response } from "express"
import { ConverterService } from "../services/ConverterService"
import { validationResult } from 'express-validator'

export const ConverterController = {
    Converter: async (req: Request, res: Response) => {

        const { price } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const result = await ConverterService.Converter(price)
        res.send(result)
    }
}
