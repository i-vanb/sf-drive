import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class FileEntity {
    constructor(fieldname, originalname, encoding, mimetype, buffer, size) {
        this.fieldname = fieldname
        this.originalname = originalname
        this.encoding = encoding
        this.mimetype = mimetype
        this.size = size
        this.buffer = buffer
    }

    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // file: string;

    // @Column()
    // entity_id: string;

    @Column()
    fieldname: string

    @Column()
    originalname: string

    @Column()
    encoding: string

    @Column()
    mimetype: string

    @Column()
    size: number

    @Column({type: "longblob"})
    buffer
}
