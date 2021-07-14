import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class CarsEntity {
    constructor(
        ownerId, name, year, shortRent, midRent, longRent,
        type, drive, transmission, engine, run, imgSM, options, photos
    ) {
        this.name = name
        this.ownerId = ownerId
        this.year = year
        this.shortRent = shortRent
        this.midRent = midRent
        this.longRent = longRent
        this.type = type
        this.drive = drive
        this.transmission = transmission
        this.engine = engine
        this.run = run
        this.imgSM = imgSM
        this.options = options
        this.photos = photos
    }

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    ownerId: string

    @Column()
    name: string;

    @Column()
    year: number;

    @Column()
    shortRent: number;

    @Column()
    midRent: number;

    @Column()
    longRent: number;

    @Column()
    type: string;

    @Column()
    drive: string;

    @Column()
    transmission: string;

    @Column()
    engine: string;

    @Column()
    run: number;

    @Column()
    imgSM?: string;

    @Column()
    options?: string;

    @Column()
    photos?: string;
}
