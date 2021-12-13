import {Resolver, Query, Args, Mutation} from "@nestjs/graphql";
import {BookingService} from "./booking.service";
// import {CreateBookingInput} from "../graphql";


@Resolver()
export class BookingResolver {
    constructor(private readonly bookingService: BookingService) {}

    @Query()
    allBooking(@Args('id') id: number) {
        return this.bookingService.getAll(id)
    }

    @Query()
    findBookingById(@Args('id') id: number) {
        return this.bookingService.findById(id)
    }

    // @Mutation()
    // createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    //     return this.bookingService.create(createCarInput)
    // }
}
