import {Module} from '@nestjs/common';
import {CarService} from "./car.service";
import {CarController} from "./car.controller";
import {CarsRepository} from "../Repositories/cars.repository";

@Module({
    providers: [CarService, CarsRepository],
    controllers: [CarController],
    exports: [CarService]
})
export class CarModule {}
