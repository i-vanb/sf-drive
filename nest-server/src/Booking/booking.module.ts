import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BookingService} from "./booking.service";
import {BookingController} from "./booking.controller";
import {BookingEntity} from "./booking.entity";
import {BookingRepository} from "../Repositories/booking.repository";
import {TokenModule} from "../Token/token.module";

@Module({
    imports: [TypeOrmModule.forFeature([BookingEntity]), TokenModule],
    providers: [BookingService, BookingRepository],
    controllers: [BookingController],
    exports: [BookingService]
})
export class BookingModule {}
