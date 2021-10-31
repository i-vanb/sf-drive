import {Injectable} from "@nestjs/common";
import {CarFiles} from "./carFiles.interface";
import {CarFilesEntity} from "./carFiles.entity";
import {CarFilesRepository} from "../Repositories/carFiles.repository";

@Injectable()
export class CarFilesService {
    constructor(private fileRepository: CarFilesRepository) {}

    async create(file: CarFiles):Promise<CarFilesEntity> {
        const newFile = new CarFilesEntity(file.fieldname, file.originalname, file.encoding, file.mimetype, file.buffer, file.size);
        return await this.fileRepository.create(newFile);
    }

    async getAll():Promise<CarFilesEntity[]> {
        return await this.fileRepository.getFiles();
    }

    async removeFile(id) {
        return await this.fileRepository.removeFile(id)
    }
}
