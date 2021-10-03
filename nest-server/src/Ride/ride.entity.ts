import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RideEntity {
    constructor(
        passengerID, carID, start, end, duration
    ) {
        this.passengerID = passengerID
        this.carID = carID
        this.start = start
        this.end = end
        this.duration = duration
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    passengerID: number

    @Column()
    carID: number

    @Column()
    start: string

    @Column()
    end: string

    @Column()
    duration: string
}
