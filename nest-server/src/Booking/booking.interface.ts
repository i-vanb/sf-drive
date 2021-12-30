export interface Booking {
    passengerID: number
    carID: number
    ownerID: number
    begin: string
    end: string
    duration: string
    description: string
    isCarDelivery: boolean
    totalPrice: number
    carDeliveryPrice: number
    isChildSeat: boolean
    childSeatPrice: number
    isAnyPlaceEnd: boolean
    anyPlaceEndPrice: number
    isArchived: boolean
    mark: string
    model: string
    year: number
    expires_in: string
    is_payed: boolean
}
