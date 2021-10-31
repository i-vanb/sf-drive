import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
// @ObjectType()
export class CarsEntity {
    constructor(
        ownerId, mark, model, number, year, color, vin, engine_type,
        volume, power_ls, power_kvt, transmission, run, pts, sts,
        price, price_3d, price_5d, city, docs, photos
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
        this.city = city
        this.docs = docs
        this.photos = photos

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

    @Column()
    city: string;

    // @Field()
    @Column()
    transmission: string;

    // @Field()
    @Column()
    engine_type: string;

    // @Field()
    @Column()
    run: number;

    // @Column({type: "set"})
    // @Column()
    @Column("simple-array")
    docs

    @Column("simple-array")
    // @Column()
    photos
}
