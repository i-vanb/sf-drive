import {Body, Controller, Delete, Get, Post, Query} from "@nestjs/common";
import {RideService} from "./ride.service";


@Controller("ride")
export class RideController {
    constructor(private readonly rideService: RideService) {}

    @Post("create")
    create(@Body() ride) {
        return this.rideService.create(ride)
    }

    @Get()
    getRides(@Query() query) {
        return this.rideService.findRides(query)
    }

    @Get("all")
    getAll() {
        return this.rideService.getAll()
    }

    @Post("update")
    update(@Body() ride) {
        return this.rideService.update(ride)
    }

    @Post("find")
    findById(@Body() body) {
        return this.rideService.findById(body.id)
    }

    @Delete("remove")
    removeCar(@Body() body) {
        return this.rideService.removeRide(body.id)
    }

}
