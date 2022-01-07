import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {CarService} from "./car.service";
import {ApiInternalServerErrorResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger"
import {CarsEntity} from "./car.entity";

@ApiTags('cars')
@Controller("car")
export class CarController {
    constructor(private readonly carService: CarService) {}

    @ApiOkResponse({
        description:'Create new car',
        type: CarsEntity,
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Post("create")
    create(@Body() car) {
        return this.carService.create(car)
    }

    @ApiOkResponse({
        description:'Return cars by query',
        type:[CarsEntity],
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Get()
    getCars(@Query() query) {
        return this.carService.findCars(query)
    }

    @ApiOkResponse({
        description:'Return all cars from db',
        type:[CarsEntity],
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Get("all")
    getAll() {
        return this.carService.getAll()
    }

    @ApiOkResponse({
        description:'Update existing car',
        type:CarsEntity,
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Post("update")
    update(@Body() car) {
        return this.carService.update(car)
    }

    @ApiOkResponse({
        description:'Return car by carID',
        type:CarsEntity,
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Post("find")
    findById(@Body() body) {
        return this.carService.findById(body.id)
    }

    @ApiOkResponse({
        description:'Remove car from db',
        type:undefined,
    })
    @ApiInternalServerErrorResponse({
        description:'Internal server error'
    })
    @Delete("remove")
    removeCar(@Body() body) {
        return this.carService.removeCar(body.id)
    }
}
