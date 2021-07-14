import {Body, Controller, Get, Post} from "@nestjs/common";
import {CarService} from "./car.service";

// it is needed only for testing
@Controller("car")
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Post("create")
    create(@Body() car) {
        return this.carService.create(car)
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
    findByMail(@Body() body) {
        return this.carService.findById(body.id)
    }

    @Post("del")
    removeUser(@Body() body) {
        return this.carService.removeCar(body.id)
    }

}
