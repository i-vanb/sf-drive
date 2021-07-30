import {Module} from '@nestjs/common';
import {CarService} from "./car.service";
import {CarController} from "./car.controller";
import {CarsRepository} from "../Repositories/cars.repository";
import {CarsResolver} from "./cars.resolver";

@Module({
    providers: [CarService, CarsRepository, CarsResolver],
    controllers: [CarController],
    exports: [CarService]
})
export class CarModule {}
