import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ownerId: number

    @Column()
    number: string

    @Column()
    pts: string

    @Column()
    sts: string

    @Column()
    power_ls: string

    @Column()
    power_kvt: string

    @Column()
    mark: string;

    @Column()
    model: string;

    @Column()
    vin: string;

    @Column()
    color: string;

    @Column()
    volume: string;

    @Column()
    year: number;

    @Column()
    price: number;

    @Column()
    price_3d: number;

    @Column()
    price_5d: number;

    @Column()
    city: string;

    @Column()
    transmission: string;

    @Column()
    engine_type: string;

    @Column()
    run: number;

    @Column("simple-array")
    docs

    @Column("simple-array")
    photos

    @Column()
    isLosfix: boolean;

    @Column()
    isAirbags: boolean;

    @Column()
    isHeater: boolean;

    @Column()
    isAuxCable: boolean;

    @Column()
    isBluetooth: boolean;

    @Column()
    isCruise: boolean;

    @Column()
    isConditioning: boolean;

    @Column()
    isMultimedia: boolean;

    @Column()
    isNavigation: boolean;

    @Column()
    isSeatsVentilation: boolean;

    @Column()
    isSeatsHeat: boolean;

    @Column()
    isRoofRack: boolean;

    @Column()
    isParktronic: boolean;

    @Column()
    isCamera: boolean;

    @Column()
    isChildrenSeat: boolean;

    @Column()
    isCarDelivery: boolean;

    @Column()
    isFreePlace: boolean;

    @Column()
    isFuel: boolean;

    @Column()
    childrenSeatPrice: number;

    @Column()
    carDeliveryPrice: number;

    @Column()
    freePlacePrice: number;

    @Column()
    fuelPrice: number;

}
