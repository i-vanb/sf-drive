import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {RidesRepository} from "../Repositories/rides.repository";
import {RideEntity} from "./ride.entity";
import {Ride} from "./ride.interface";

@Injectable()
export class RideService {
    constructor(private ridesRepository: RidesRepository) {}

    async create(ride: Ride):Promise<RideEntity> {
        const newRide = new RideEntity(
            ride.carID, ride.passengerId, ride.start, ride.end, ride.duration
        );
        return await this.ridesRepository.createRide(newRide);
    }

    async findRides(query) {
        return await this.ridesRepository.findRides(query)
        // console.log(query)
    }

    async getByPassenger(passengerID: number) {
        return await this.ridesRepository.getByPassenger(passengerID)
    }

    async findById(id:number):Promise<RideEntity> {
        return await this.ridesRepository.findRide(id)
    }

    async getAll():Promise<RideEntity[]> {
        return await this.ridesRepository.getRides()
    }

    async update(ride) {
        const existingRide = await this.findById(ride.id)
        if(!existingRide) throw new HttpException('Ride is not found', HttpStatus.NOT_FOUND);
        Object.keys(ride).map(i => existingRide[i] = ride[i])
        return await this.ridesRepository.update(existingRide)
    }

    async removeRide(id) {
        return await this.ridesRepository.removeRide(id)
    }
}
