import {Module} from '@nestjs/common';
import {CarService} from "./car.service";
import {CarController} from "./car.controller";
import {CarsRepository} from "../Repositories/cars.repository";
import {CarsResolver} from "./cars.resolver";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarsEntity} from "./car.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CarsEntity])],
    providers: [CarService, CarsRepository, CarsResolver],
    controllers: [CarController],
    exports: [CarService]
})
export class CarModule {}
