import {Module} from '@nestjs/common';
import {CarFilesController} from "./carFiles.controller";
import {CarFilesService} from "./carFiles.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarFilesEntity} from "./carFiles.entity";
import {CarFilesRepository} from "../Repositories/carFiles.repository";

@Module({
    imports: [TypeOrmModule.forFeature([CarFilesEntity])],
    controllers: [CarFilesController],
    providers: [CarFilesService, CarFilesRepository],
    exports: [CarFilesService]
})

export class CarFilesModule {}
