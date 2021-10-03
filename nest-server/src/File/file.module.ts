import {Module} from '@nestjs/common';
import {FileController} from "./file.controller";
import {FileService} from "./file.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileEntity} from "./file.entity";
import {FileRepository} from "../Repositories/file.repository";

@Module({
    imports: [TypeOrmModule.forFeature([FileEntity])],
    controllers: [FileController],
    providers: [FileService, FileRepository],
    exports: [FileService]
})

export class FileModule {}
