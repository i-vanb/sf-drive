import {Injectable} from "@nestjs/common";
import {CarsEntity} from "../Cars/car.entity";
import {getMongoRepository, ObjectID} from "typeorm";

@Injectable()
export class CarsRepository {
    async createCar(cars: CarsEntity) {
        const repository = getMongoRepository(CarsEntity)
        return await repository.save(cars)
    }

    async update(car: CarsEntity) {
        const repository = getMongoRepository(CarsEntity)
        return await repository.save(car)
    }

    async findCar(id: ObjectID) {
        const repository = getMongoRepository(CarsEntity)
        return await repository.findOne( {_id:id})
    }

    async getCars() {
        const repository = getMongoRepository(CarsEntity)
        return await repository.find()
    }

    async removeCar(id: ObjectID) {
        const repository = getMongoRepository(CarsEntity)
        return await repository.delete(id)
    }
}
