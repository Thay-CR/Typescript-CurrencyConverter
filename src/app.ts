import 'dotenv/config'
import express from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { usersRoute } from '../src/routes'
import { newLog } from './config/logs'

const app = express()
const port = process.env.PORT

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use(morgan('combined', {
    "stream": {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        write: (meta: any) => {
            console.log("<:::REQUEST DATA:::>", meta)
            newLog(meta)
        },
    }
}
))

app.use('/v1', usersRoute)
const server = app

server.listen(port, () => {
    console.log(`listen on ${port}`)
})



