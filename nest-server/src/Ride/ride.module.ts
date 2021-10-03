import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RideService} from "./ride.service";
import {RideController} from "./ride.controller";
import {RideEntity} from "./ride.entity";
import {RidesRepository} from "../Repositories/rides.repository";

@Module({
    imports: [TypeOrmModule.forFeature([RideEntity])],
    providers: [RideService, RidesRepository],
    controllers: [RideController],
    exports: [RideService]
})
export class RideModule {}
