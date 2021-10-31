import {Injectable} from "@nestjs/common";
import {CarFilesEntity} from "../CarFiles/carFiles.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CarFilesRepository {
    constructor(
        @InjectRepository(CarFilesEntity)
        private fileRepository: Repository<CarFilesEntity>
    ) {}

    async create(file: CarFilesEntity) {
        const newFile = await this.fileRepository.create(file)
        return await this.fileRepository.save(newFile)
    }

    async update(update: CarFilesEntity) {
        return await this.fileRepository.save(update)
    }

    // async find(id: string) {
    //     return await this.fileRepository.findOne({id: id})
    // }

    async getFiles() {
        return await this.fileRepository.find()
    }

    async findOne(id: number) {
        return await this.fileRepository.findByIds([id])
    }

    async removeFile(id: number) {
        const file = await this.fileRepository.findByIds([id])
        return await this.fileRepository.remove(file)
    }
}
