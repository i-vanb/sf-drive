import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";


@Entity()
export class CarsEntity {
    constructor(
        ownerId, mark, model, number, year, color, vin, engine_type,
        volume, power_ls, power_kvt, transmission, run, pts, sts,
        price, price_3d, price_5d, city, docs, photos, isLosfix, isAirbags, isHeater, isAuxCable, isBluetooth, isCruise, isConditioning, isMultimedia, isNavigation,
        isSeatsVentilation, isSeatsHeat, isRoofRack, isParktronic, isCamera, isChildrenSeat, isCarDelivery, isFreePlace,
        isFuel, childrenSeatPrice, carDeliveryPrice, freePlacePrice, fuelPrice
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
        this.isLosfix = isLosfix
        this.isAirbags = isAirbags
        this.isHeater = isHeater
        this.isAuxCable = isAuxCable
        this.isBluetooth = isBluetooth
        this.isCruise = isCruise
        this.isConditioning = isConditioning
        this.isMultimedia = isMultimedia
        this.isNavigation = isNavigation
        this.isSeatsVentilation = isSeatsVentilation
        this.isSeatsHeat = isSeatsHeat
        this.isRoofRack = isRoofRack
        this.isParktronic = isParktronic
        this.isCamera = isCamera
        this.isChildrenSeat = isChildrenSeat
        this.isCarDelivery = isCarDelivery
        this.isFreePlace = isFreePlace
        this.isFuel = isFuel
        this.childrenSeatPrice = childrenSeatPrice
        this.carDeliveryPrice = carDeliveryPrice
        this.freePlacePrice = freePlacePrice
        this.fuelPrice = fuelPrice
    }

    @ApiProperty({
        description:'Car ID (primary key)',
        required:true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        description:'ID of car\'s owner',
        required:true
    })
    @Column()
    ownerId: number

    @ApiProperty({
        description:'Registration number of car',
        required:true,

    })
    @Column()
    number: string

    @ApiProperty({
        description:'PTS Number',
        required:true,

    })
    @Column()
    pts: string

    @ApiProperty({
        description:'STS number',
        required:true,
    })
    @Column()
    sts: string

    @ApiProperty({
        description:'Power of engine in LS',
        required:true,
    })
    @Column()
    power_ls: string

    @ApiProperty({
        description:'Power of engine in KVT',
        required:true,

    })
    @Column()
    power_kvt: string

    @ApiProperty({
        description:'Mark of the Car',
        required:true,

    })
    @Column()
    mark: string;

    @ApiProperty({
        description:'Model of the car',
        required:true,

    })
    @Column()
    model: string;

    @ApiProperty({
        description:'VIN number',
        required:true,

    })
    @Column()
    vin: string;

    @ApiProperty({
        description:'Color of the car',
        required:true,

    })
    @Column()
    color: string;

    @ApiProperty({
        description:'Volume of engine',
        required:true,

    })
    @Column()
    volume: string;

    @ApiProperty({
        description:'Year',
        required:true,
    })
    @Column()
    year: number;

    @ApiProperty({
        description:'Price',
        required:true,

    })
    @Column()
    price: number;

    @ApiProperty({
        description:'Daily Price when rent is 3 days',
        required:true,
    })
    @Column()
    price_3d: number;

    @ApiProperty({
        description:'Daily Price when rent is 5 days and more',
        required:true,

    })
    @Column()
    price_5d: number;

    @ApiProperty({
        description:'City',
        required:true,

    })
    @Column()
    city: string;

    @ApiProperty({
        description:'Transmission',
        required:true,

    })
    @Column()
    transmission: string;

    @ApiProperty({
        description:'Engine type',
        required:true,

    })
    @Column()
    engine_type: string;

    @ApiProperty({
        description:'Total Run of the car in KM',
        required:true,

    })
    @Column()
    run: number;

    @ApiProperty({
        description:'Array of doc\'s ids',
        required:false,
        default:[]
    })
    @Column("simple-array")
    docs

    @ApiProperty({
        description:'Array of photo\'s ids' ,
        required:false,
        default:[]
    })
    @Column("simple-array")
    photos

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isLosfix: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isAirbags: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isHeater: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isAuxCable: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isBluetooth: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isCruise: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isConditioning: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isMultimedia: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isNavigation: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isSeatsVentilation: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isSeatsHeat: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isRoofRack: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isParktronic: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isCamera: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isChildrenSeat: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isCarDelivery: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isFreePlace: boolean;

    @ApiProperty({
        description:'Additional options',
        required:false,
        default: false
    })
    @Column()
    isFuel: boolean;

    @ApiProperty({
        description:'Additional option\'s price',
        required:false,
        default: 1000
    })
    @Column()
    childrenSeatPrice: number;

    @ApiProperty({
        description:'Additional option\'s price',
        required:false,
        default: 1000
    })
    @Column()
    carDeliveryPrice: number;

    @ApiProperty({
        description:'Additional option\'s price',
        required:false,
        default: 1000
    })
    @Column()
    freePlacePrice: number;

    @ApiProperty({
        description:'Additional option\'s price',
        required:false,
        default: 1000
    })
    @Column()
    fuelPrice: number;
}
