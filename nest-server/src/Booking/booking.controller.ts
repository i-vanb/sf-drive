import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {BookingService} from "./booking.service";


@Controller("booking")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @Post("create")
    create(@Body() booking) {
        return this.bookingService.create(booking)
    }

    @Get()
    getRides(@Query() query) {
        return this.bookingService.findBooking(query)
    }

    @Get("all")
    getAll(@Query() query) {
        return this.bookingService.getAll(query.id)
    }

    @Post("update")
    update(@Body() ride) {
        return this.bookingService.update(ride)
    }

    @Post("find")
    findById(@Body() body) {
        return this.bookingService.findById(body.id)
    }

    @Delete("remove")
    removeCar(@Body() body) {
        return this.bookingService.removeBooking(body.id)
    }

}
