import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";


@Entity()
// @ObjectType()
export class CarsEntity {
    constructor(
        ownerId, mark, model, number, year, color, vin, engine_type,
        volume, power_ls, power_kvt, transmission, run, pts, sts,
        price, price_3d, price_5d
        // type, drive,  imgSM, options, photos,
    ) {
        this.mark = mark
        this.model = model
        this.number = number
        this.ownerId = ownerId
        this.year = year
        this.color = color
        this.vin = vin
        this.engine_type = engine_type
        this.volume = volume
        this.power_ls = power_ls
        this.power_kvt = power_kvt
        this.transmission = transmission
        this.run = run
        this.pts = pts
        this.sts = sts
        this.price = price
        this.price_3d = price_3d
        this.price_5d = price_5d

        // this.type = type
        // this.drive = drive
        // this.imgSM = imgSM
        // this.options = options
        // this.photos = photos
    }

    // @Field(type => ID)
    // @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number

    // @Field()
    @Column()
    ownerId: number

    // @Field()
    @Column()
    number: string

    // @Field()
    @Column()
    pts: string

    // @Field()
    @Column()
    sts: string

    // @Field()
    @Column()
    power_ls: string

    // @Field()
    @Column()
    power_kvt: string

    // @Field()
    @Column()
    mark: string;

    // @Field()
    @Column()
    model: string;

   // @Field()
    @Column()
    vin: string;

    // @Field()
    @Column()
    color: string;

    // @Field()
    @Column()
    volume: string;

    // @Field()
    @Column()
    year: number;

    // @Field()
    @Column()
    price: number;

    // @Field()
    @Column()
    price_3d: number;

    // @Field()
    @Column()
    price_5d: number;

    // @Field()
    @Column()
    transmission: string;

    // @Field()
    @Column()
    engine_type: string;

    // @Field()
    @Column()
    run: number;


}


//// @Field()
//     @Column()
//     imgSM?: string;
//
//     // @Field()
//     @Column()
//     options?: string;
//
//     // @Field()
//     @Column()
//     photos?: string;
//// @Field()
//     @Column()
//     type: string;
//
//     // @Field()
//     @Column()
//     drive: string;
