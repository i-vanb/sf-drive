import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class MessageEntity {
    constructor(fromId, toId, toUsername, toEmail, subject, carId, text, date, chat_id) {
        this.fromId = fromId,
        this.toId = toId,
        this.toUsername = toUsername,
        this.toEmail = toEmail,
        this.subject = subject,
        this.carId = carId,
        this.text = text,
        this.date = date,
        this.chat_id = chat_id
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
    toEmail: string
    @Column()
    subject: string
    @Column()
    carId: number
    @Column()
    text: string
    @Column()
    date: string
    @Column()
    chat_id: string
}
