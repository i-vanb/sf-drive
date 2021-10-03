import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {CarService} from "./car.service";

// it is needed only for testing
@Controller("car")
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Post("create")
    create(@Body() car) {
        return this.carService.create(car)
    }

    @Get()
    getCars(@Query() query) {
        return this.carService.findCars(query)
    }

    @Get("all")
    getAll() {
        return this.carService.getAll()
    }

    @Post("update")
    update(@Body() car) {
        return this.carService.update(car)
    }

    @Post("find")
    findById(@Body() body) {
        return this.carService.findById(body.id)
    }

    @Delete("remove")
    removeCar(@Body() body) {
        return this.carService.removeCar(body.id)
    }

}
