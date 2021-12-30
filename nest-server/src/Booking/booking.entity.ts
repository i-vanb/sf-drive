import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class BookingEntity {
    constructor(
        passengerID, carID, ownerID, begin, end, duration, description, totalPrice, isCarDelivery,
        carDeliveryPrice, isChildSeat, childSeatPrice, isAnyPlaceEnd, anyPlaceEndPrice, isArchived,
        mark, model, year, expires_in, is_payed
    ) {
        this.passengerID = passengerID
        this.carID = carID
        this.ownerID = ownerID
        this.begin = begin
        this.end = end
        this.duration = duration
        this.description = description
        this.isCarDelivery = isCarDelivery
        this.totalPrice = totalPrice
        this.carDeliveryPrice = carDeliveryPrice
        this.isChildSeat = isChildSeat
        this.childSeatPrice = childSeatPrice
        this.isAnyPlaceEnd = isAnyPlaceEnd
        this.anyPlaceEndPrice = anyPlaceEndPrice
        this.isArchived = isArchived
        this.mark = mark
        this.model = model
        this.year = year
        this.expires_in = expires_in
        this.is_payed = is_payed

    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    passengerID: number

    @Column()
    carID: number

    @Column()
    ownerID: number

    @Column()
    begin: string

    @Column()
    end: string

    @Column()
    duration: string

    @Column()
    description: string

    @Column()
    totalPrice: number

    @Column()
    isCarDelivery: boolean

    @Column()
    carDeliveryPrice: number

    @Column()
    isChildSeat: boolean

    @Column()
    childSeatPrice: number

    @Column()
    isAnyPlaceEnd: boolean

    @Column()
    anyPlaceEndPrice: number

    @Column()
    isArchived: boolean

    @Column()
    mark: string

    @Column()
    model: string

    @Column()
    year: number

    @Column()
    expires_in: string

    @Column()
    is_payed: boolean
}
