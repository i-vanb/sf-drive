import {Body, Controller, Get, Param, Post, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileService} from "./file.service";
import {FileInterceptor} from "@nestjs/platform-express";


@Controller("file")
export class FileController {
    constructor(private readonly fileService: FileService) {}

    @Post("create")
    @UseInterceptors(FileInterceptor("file"))
    uploadSingle(@UploadedFile() file) {
        // console.log(file)
        // console.log(typeof file)
        return this.fileService.create(file)
    }
    // create(@Body() file) {return this.fileService.create(file)}

    @Get(':id')
    findOne(@Param() params) {
        return this.fileService.getById(params.id)
    }

    @Get("all")
    getAll() {
        return this.fileService.getAll()
    }
}
