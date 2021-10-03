import {Injectable} from "@nestjs/common";
import {FileEntity} from "../File/file.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class FileRepository {
    constructor(
        @InjectRepository(FileEntity)
        private fileRepository: Repository<FileEntity>
    ) {}

    async create(file: FileEntity) {
        const newFile = await this.fileRepository.create(file)
        return await this.fileRepository.save(newFile)
    }

    async update(update: FileEntity) {
        return await this.fileRepository.save(update)
    }

    // async find(id: string) {
    //     return await this.fileRepository.findOne({id: id})
    // }

    async getFiles(entity_id: string) {
        return await this.fileRepository.find({entity_id})
    }

    async findOne(id: number) {
        return await this.fileRepository.findByIds([id])
    }

    async removeFile(id: number) {
        const file = await this.fileRepository.findByIds([id])
        return await this.fileRepository.remove(file)
    }
}
