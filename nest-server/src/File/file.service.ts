import {Injectable} from "@nestjs/common";
import {File} from "./file.interface";
import {FileRepository} from "../Repositories/file.repository";
import {FileEntity} from "./file.entity";

@Injectable()
export class FileService {
    constructor(private fileRepository: FileRepository) {}

    async create(file: File):Promise<FileEntity> {
        const newFile = new FileEntity(file.file, file.entity_id);
        return await this.fileRepository.create(newFile);
    }

    async getAll(entity_id: string):Promise<FileEntity[]> {
        return await this.fileRepository.getFiles(entity_id)
    }

    async removeFile(id) {
        return await this.fileRepository.removeFile(id)
    }
}
