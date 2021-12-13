export const getCalendarArray = (year, month) => {
    const now = new Date()
    const newDate = new Date(year, month, 1)
    const lastDate = new Date(year, month+1, 0).getDate()
    const firstDay = newDate.getDay() || 7
    return Array.from(Array(42), (e, index) => {
        if(index < firstDay-1 || index > firstDay-2+lastDate) {
            return {number: 0,}
        } else {
            const number = index-(firstDay-2)
            return {
                number,
                isPast: year < now.getFullYear()
                    || month < now.getMonth()
                    || month === now.getMonth() && number < now.getDate()}
        }
    })

}

const getTwoDigitalFormat = number => {
    if(number.toString().length !== 2) return `0${number}`
    return number
}
const getRealMonthNumber = (month) => {
    if(month<11) return month+1
    return 1
}
export const getDateMonth = date => {
    const dd = getTwoDigitalFormat(date.getDate())
    const mm = getTwoDigitalFormat(getRealMonthNumber(date.getMonth()))
    const yyyy = date.getFullYear()

    return `${dd}.${mm}.${yyyy}`

}
