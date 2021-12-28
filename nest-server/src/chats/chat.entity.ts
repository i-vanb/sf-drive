import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class ChatEntity {
    constructor(fromId, toId, toUsername, carId, date) {
        this.fromId = fromId,
        this.toId = toId,
        this.toUsername = toUsername,
        this.carId = carId,
        this.date = date
    }

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    fromId: number
    @Column()
    toId: number
    @Column()
    toUsername: string
    @Column()
    carId: number
    @Column()
    date: string
}
