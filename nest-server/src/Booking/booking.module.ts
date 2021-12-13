import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BookingService} from "./booking.service";
import {BookingController} from "./booking.controller";
import {BookingEntity} from "./booking.entity";
import {BookingRepository} from "../Repositories/booking.repository";

@Module({
    imports: [TypeOrmModule.forFeature([BookingEntity])],
    providers: [BookingService, BookingRepository],
    controllers: [BookingController],
    exports: [BookingService]
})
export class BookingModule {}
