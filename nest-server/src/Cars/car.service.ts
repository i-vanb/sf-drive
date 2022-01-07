import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CarsEntity} from "./car.entity";
import {getMongoManager, getMongoRepository} from "typeorm";
import {Car} from "./car.interface";
import {CarsRepository} from "../Repositories/cars.repository";

@Injectable()
export class CarService {
    constructor(private carRepository: CarsRepository) {}

    create(car: Car):Promise<CarsEntity> {
        const newCar = new CarsEntity(
            car.ownerId, car.mark, car.model, car.number, car.year, car.color, car.vin, car.engine_type, car.volume,
            car.power_ls, car.power_kvt, car.transmission, car.run, car.pts, car.sts, car.price, car.price_3d, car.price_5d,
            car.city, car.docs, car.photos, car.isLosfix, car.isAirbags, car.isHeater, car.isAuxCable, car.isBluetooth, car.isCruise, car.isConditioning, car.isMultimedia, car.isNavigation,
            car.isSeatsVentilation, car.isSeatsHeat, car.isRoofRack, car.isParktronic, car.isCamera, car.isChildrenSeat, car.isCarDelivery, car.isFreePlace,
            car.isFuel, car.childrenSeatPrice, car.carDeliveryPrice, car.freePlacePrice, car.fuelPrice
        );
        return this.carRepository.createCar(newCar);
    }

    findCars(query) {
        return this.carRepository.findCars(query)
        // console.log(query)
    }

    getByOwner(ownerId: number) {
        return this.carRepository.getByOwner(ownerId)
    }

    findById(id:number) {
        return this.carRepository.findCar(id)
    }

    findByMark(mark: string) {
        return this.carRepository.getCarsByMark(mark)
    }

    findByCity(city: string) {
        return this.carRepository.getCarsByCity(city)
    }

    async getAll():Promise<CarsEntity[]> {
        return await this.carRepository.getCars()
    }

    async update(car) {
        const existingCar = await this.findById(car.id)
        if(!existingCar) throw new HttpException('Car is not found', HttpStatus.NOT_FOUND);
        Object.keys(car).map(i => existingCar[i] = car[i])
        return await this.carRepository.update(existingCar)
    }

    removeCar(id) {
        return this.carRepository.removeCar(id)
    }
}
