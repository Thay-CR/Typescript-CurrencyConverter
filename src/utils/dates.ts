const data = new Date()
const day = data.getDate()
const month = data.getMonth()
const year = data.getFullYear()
const hour = data.getHours()
const today = day + '' + (month + 1) + '' + year
const now = hour

export const dataHour = {
    today,
    now
}


