import fs from "fs"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyFile = async (path: any): Promise<boolean | void> => {

    await fs.access(path, (fileNotExist) => {

        if (fileNotExist) {
            fs.mkdir(path, (errorToCreate) => {
                if (errorToCreate) {
                    console.log("Error to create file",errorToCreate)
                    return false
                } else {
                    return true
                }
            })
        } else {
            return true
        }
    })

}
