import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {BookingEntity} from "./booking.entity";
import {Booking} from "./booking.interface";
import {BookingRepository} from "../Repositories/booking.repository";
import {TokenService} from "../Token/token.service";
import {PAYMENT_TOKEN_SECRET} from "../Token/token.config";

@Injectable()
export class BookingService {
    constructor(
        private bookingRepository: BookingRepository,
        private tokenService: TokenService
    ) {}



    async create(booking: Booking):Promise<{booking: BookingEntity, token: String}> {
        const newRide = new BookingEntity(
            booking.passengerID, booking.carID, booking.ownerID, booking.begin, booking.end, booking.duration,
            booking.description, booking.totalPrice, booking.isCarDelivery, booking.carDeliveryPrice,
            booking.isChildSeat, booking.childSeatPrice, booking.isAnyPlaceEnd, booking.anyPlaceEndPrice,
            booking.isArchived, booking.mark, booking.model, booking.year, booking.expires_in, booking.is_payed
        );
        const res = await this.bookingRepository.createRide(newRide);
        setTimeout(async ()=>{
            const targetBooking = await this.bookingRepository.findRide(res.id)
            console.log('targetBooking', targetBooking)
            if(!targetBooking.is_payed) this.archiveBooking(res.id)
        }, 2400000) // for tests 120000
        const token = await this.tokenService.createPaymentToken({...res})
        return {booking: res, token}
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

    async applyBooking(id) {
        const booking = await this.findById(id)
        if(!booking) throw new HttpException('Booking is not found', HttpStatus.NOT_FOUND);
        booking.is_payed = true
        return await this.bookingRepository.update(booking)
    }

    async archiveBooking(id) {
        const booking = await this.findById(id)
        if(!booking) throw new HttpException('Booking is not found', HttpStatus.NOT_FOUND);
        booking.isArchived = true
        return await this.bookingRepository.update(booking)
    }

    async removeBooking(id) {
        return await this.bookingRepository.removeRide(id)
    }

    checkPaymentToken(token) {
        try {
            this.tokenService.verifyToken(token, PAYMENT_TOKEN_SECRET)
        } catch (err) {
            throw new HttpException('Token is invalid', HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
