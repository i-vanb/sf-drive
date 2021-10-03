import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {RideEntity} from "../Ride/ride.entity";

@Injectable()
export class RidesRepository {
    constructor(
        @InjectRepository(RideEntity)
        private ridesRepository: Repository<RideEntity>
    ) {}

    async createRide(ride: RideEntity) {
        const newRide = await this.ridesRepository.create(ride)
        return this.ridesRepository.save(newRide)
    }

    async update(ride: RideEntity) {
        return await this.ridesRepository.save(ride)
    }

    async findRide(id: number) {
        return await this.ridesRepository.findByIds([id])[0]
    }

    async findRides(query) {
        return await this.ridesRepository.find(query)
    }

    async getRides() {
        return await this.ridesRepository.find()
    }

    async getByPassenger(passengerID: number) {
        return await this.ridesRepository.find({passengerID})
    }

    async removeRide(id: number) {
        const ride = await this.ridesRepository.findByIds([id])
        return await this.ridesRepository.remove(ride)
    }
}
