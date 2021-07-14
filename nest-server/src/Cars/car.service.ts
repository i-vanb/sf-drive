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
            car.ownerId, car.name, car.year, car.shortRent, car.midRent, car.longRent,
            car.type, car.drive, car.transmission, car.engine, car.run, car.imgSM, car.options, car.photos
        );
        return await this.carRepository.createCar(newCar);
    }

    async findById(id):Promise<CarsEntity> {
        return await this.carRepository.findCar(id)
    }

    async getAll():Promise<CarsEntity[]> {
        return await this.carRepository.getCars()
    }

    async update(car) {
        const existingCar = await this.findById(car.id)
        if(!existingCar) throw new HttpException('Car is not found', HttpStatus.NOT_FOUND);
        existingCar.ownerId = car.ownerId,
        existingCar.name = car.name,
        existingCar.year = car.year,
        existingCar.shortRent = car.shortRent,
        existingCar.midRent = car.midRent,
        existingCar.longRent = car.longRent,
        existingCar.type = car.type,
        existingCar.drive = car.drive,
        existingCar.transmission = car.transmission,
        existingCar.engine = car.engine,
        existingCar.run = car.run,
        existingCar.imgSM = car.imgSM,
        existingCar.options = car.options,
        existingCar.photos = car.photos

        return await this.carRepository.update(existingCar)
    }

    async removeCar(id) {
        return await this.carRepository.removeCar(id)
    }
}
