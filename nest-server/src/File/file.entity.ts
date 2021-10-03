import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class FileEntity {
    constructor(
        file, entity_id
    ) {
        this.file = file
        this.entity_id = entity_id
    }

    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    file: string;

    @Column()
    entity_id: string;
}
