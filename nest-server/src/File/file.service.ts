import {Injectable} from "@nestjs/common";
import {File} from "./file.interface";
import {FileRepository} from "../Repositories/file.repository";
import {FileEntity} from "./file.entity";

@Injectable()
export class FileService {
    constructor(private fileRepository: FileRepository) {}

    async create(file: File):Promise<FileEntity> {
        const newFile = new FileEntity(file.fieldname, file.originalname, file.encoding, file.mimetype, file.buffer, file.size);
        return await this.fileRepository.create(newFile);
    }

    async getAll():Promise<FileEntity[]> {
        return await this.fileRepository.getFiles();
    }

    async removeFile(id) {
        return await this.fileRepository.removeFile(id)
    }
}
