import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CarsEntity} from "./car.entity";
import {getMongoManager, getMongoRepository} from "typeorm";
import {Car} from "./car.interface";
import {CarsRepository} from "../Repositories/cars.repository";

@Injectable()
export class CarService {
    constructor(private carRepository: CarsRepository) {}

    async create(car: Car):Promise<CarsEntity> {
        const newCar = new CarsEntity(
            car.ownerId, car.mark, car.model, car.number, car.year, car.color, car.vin, car.engine_type, car.volume,
            car.power_ls, car.power_kvt, car.transmission, car.run, car.pts, car.sts, car.price, car.price_3d, car.price_5d,
            car.city
            // car.ownerId, car.name, car.year, car.shortRent, car.midRent, car.longRent,
            // car.type, car.drive, car.transmission, car.engine, car.run, car.imgSM, car.options, car.photos
        );
        return await this.carRepository.createCar(newCar);
    }

    async findCars(query) {
        return await this.carRepository.findCars(query)
    }

    async getByOwner(ownerId: number) {
        return await this.carRepository.getByOwner(ownerId)
    }

    async findById(id:number):Promise<CarsEntity> {
        return await this.carRepository.findCar(id)
    }

    async findByMark(mark: string) {
        return await this.carRepository.getCarsByMark(mark)
    }

    async findByCity(city: string) {
        return await this.carRepository.getCarsByCity(city)
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

    async removeCar(id) {
        return await this.carRepository.removeCar(id)
    }
}
