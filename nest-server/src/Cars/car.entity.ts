import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";


@Entity()
@ObjectType()
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

    @Field(type => ID)
    @ObjectIdColumn()
    _id: ObjectID;

    @Field()
    @Column()
    ownerId: string

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    year: number;

    @Field()
    @Column()
    shortRent: number;

    @Field()
    @Column()
    midRent: number;

    @Field()
    @Column()
    longRent: number;

    @Field()
    @Column()
    type: string;

    @Field()
    @Column()
    drive: string;

    @Field()
    @Column()
    transmission: string;

    @Field()
    @Column()
    engine: string;

    @Field()
    @Column()
    run: number;

    @Field()
    @Column()
    imgSM?: string;

    @Field()
    @Column()
    options?: string;

    @Field()
    @Column()
    photos?: string;
}
