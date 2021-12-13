import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {BookingEntity} from "./booking.entity";
import {Booking} from "./booking.interface";
import {BookingRepository} from "../Repositories/booking.repository";

@Injectable()
export class BookingService {
    constructor(private bookingRepository: BookingRepository) {}

    async create(booking: Booking):Promise<BookingEntity> {
        console.log(Object.keys(booking))
        const newRide = new BookingEntity(
            booking.passengerID, booking.carID, booking.ownerID, booking.begin, booking.end, booking.duration, booking.description, booking.totalPrice, booking.isCarDelivery,
            booking.carDeliveryPrice, booking.isChildSeat, booking.childSeatPrice, booking.isAnyPlaceEnd, booking.anyPlaceEndPrice, booking.isArchived, booking.mark, booking.model, booking.year,
        );
        return await this.bookingRepository.createRide(newRide);
    }

    async findBooking(query) {
        return await this.bookingRepository.findRides(query)
    }

    async getByPassenger(passengerID: number) {
        return await this.bookingRepository.getByPassenger(passengerID)
    }

    async findById(id:number):Promise<BookingEntity> {
        return await this.bookingRepository.findRide(id)
    }

    async getAll(id):Promise<BookingEntity[]> {
        return await this.bookingRepository.getByPassenger(id)
    }

    async update(ride) {
        const existingRide = await this.findById(ride.id)
        if(!existingRide) throw new HttpException('Ride is not found', HttpStatus.NOT_FOUND);
        Object.keys(ride).map(i => existingRide[i] = ride[i])
        return await this.bookingRepository.update(existingRide)
    }

    async removeBooking(id) {
        return await this.bookingRepository.removeRide(id)
    }
}
