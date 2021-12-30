export const getCalendarArray = (year, month, busyDates) => {
    const now = new Date()
    const newDate = new Date(year, month, 1)
    const lastDate = new Date(year, month+1, 0).getDate()
    const firstDay = newDate.getDay() || 7
// console.log(busyDates)
    return Array.from(Array(42), (e, index) => {
        if(index < firstDay-1 || index > firstDay-2+lastDate) {
            return {number: 0}
        } else {
            let isReserved = false
            const number = index-(firstDay-2)
            busyDates.map(i => {
                const begin = new Date(i.begin).getTime()
                const end = new Date(i.end).getTime()
                const day = new Date(year, month, number).getTime()
                if(day >= begin && day <= end) {
                    isReserved = true
                }
                // console.log(isReserved)
            })
            return {
                number,
                isPast: year < now.getFullYear()
                    || year === now.getFullYear() && month < now.getMonth()
                    || year === now.getFullYear() && month === now.getMonth() && number < now.getDate()
                    || isReserved
            }
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
    const newDate = new Date(date)
    const dd = getTwoDigitalFormat(newDate.getDate())
    const mm = getTwoDigitalFormat(getRealMonthNumber(newDate.getMonth()))
    const yyyy = newDate.getFullYear()

    return `${dd}.${mm}.${yyyy}`

}
