import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class UserEntity {
    constructor(
        name, mail, phone, birth_date, passport_number, passport_date, passport_vendor,
                passport_code, licence_number, licence_date, password
    ) {
        this.name = name
        this.mail = mail
        this.phone = phone
        this.birth_date = birth_date
        this.passport_number = passport_number
        this.passport_date = passport_date
        this.passport_vendor = passport_vendor
        this.passport_code = passport_code
        this.licence_number = licence_number
        this.licence_date = licence_date
        this.password = password
    }

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    mail: string;

    @Column()
    phone: string;

    @Column()
    birth_date: string;

    @Column()
    passport_number: string;

    @Column()
    passport_date: string;

    @Column()
    passport_vendor: string;

    @Column()
    passport_code: string;

    @Column()
    licence_number: string;

    @Column()
    licence_date: string;

    @Column()
    password?: string;

}