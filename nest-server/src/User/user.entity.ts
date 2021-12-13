import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    constructor(
        name, mail, phone, birth_date, passport_number, passport_date, passport_vendor,
                passport_code, licence_number, licence_date, password, photo
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
        this.photo = photo
    }

    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;

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
    photo: string;

    @Column()
    password?: string;

}
