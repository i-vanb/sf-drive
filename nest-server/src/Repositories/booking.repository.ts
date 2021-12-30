import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {BookingEntity} from "../Booking/booking.entity";

@Injectable()
export class BookingRepository {
    constructor(
        @InjectRepository(BookingEntity)
        private bookingRepository: Repository<BookingEntity>
    ) {}

    async createRide(ride: BookingEntity) {
        const newRide = await this.bookingRepository.create(ride)
        return this.bookingRepository.save(newRide)
    }

    async update(ride: BookingEntity) {
        return await this.bookingRepository.save(ride)
    }

    async findRide(id: number) {
        const ride = await this.bookingRepository.findByIds([id])
        return ride[0]
    }

    async findRides(query) {
        return await this.bookingRepository.find(query)
    }

    async getRides() {
        return await this.bookingRepository.find()
    }

    async getByPassenger(passengerID: number) {
        return await this.bookingRepository.find({passengerID})
    }

    async removeRide(id: number) {
        const ride = await this.bookingRepository.findByIds([id])
        return await this.bookingRepository.remove(ride)
    }
}
