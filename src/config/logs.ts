import fs from 'fs'
import { dataHour } from '../utils/dates'
import { verifyFile } from '../utils/filesExists'

const pathDir: string = __dirname + `/../logs/${dataHour.today}`

export const newLog = async (content: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await verifyFile(pathDir)
    fs.appendFile(pathDir + `/${dataHour.today}_${dataHour.now}.txt`, content, function (errAppend) {
        if (errAppend){
            fs.writeFile(pathDir + `/${dataHour.today}_${dataHour.now}.txt`, content, function (errWrite) {
                console.log(errWrite)
            })
           }
        })
    console.log(`***see at => /src/logs/${dataHour.today} *** \n`)
}




