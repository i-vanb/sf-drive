import {Injectable} from "@nestjs/common";
import {CarsEntity} from "../Cars/car.entity";
import {Like, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Car} from "../Cars/car.interface";

@Injectable()
export class CarsRepository {
    constructor(
        @InjectRepository(CarsEntity)
        private carRepository: Repository<CarsEntity>
    ) {}

    async createCar(car: CarsEntity) {
        const newCar = await this.carRepository.create(car)
        return this.carRepository.save(newCar)
    }

    async update(car: CarsEntity) {
        return await this.carRepository.save(car)
    }

    async findCar(id: number) {
        const list = await this.carRepository.findByIds([id])
        // return await this.carRepository.findByIds([id])[0]
        return list[0]
    }

    async findCars(query) {
        return await this.carRepository.find(query)
    }

    async getCarsByMark(mark: string) {
        return await this.carRepository.find({
            where: {
                mark: Like(`%${mark}%`)
            }
        })
    }

    async getCarsByCity(city: string) {
        return await this.carRepository.find({
            where: {
                city: Like(`%${city}%`)
            }
        })
    }

    async getCars() {
        return await this.carRepository.find()
    }

    async getByOwner(ownerId: number) {
        return await this.carRepository.find({ownerId})
    }



    async removeCar(id: number) {
        const car = await this.carRepository.findByIds([id])
        return await this.carRepository.remove(car)
    }
}
