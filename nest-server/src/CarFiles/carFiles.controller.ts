import {Body, Controller, Get, Param, Post, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CarFilesService} from "./carFiles.service";
import {FileInterceptor} from "@nestjs/platform-express";


@Controller("files/car")
export class CarFilesController {
    constructor(private readonly fileService: CarFilesService) {}

    @Post("create")
    @UseInterceptors(FileInterceptor("file"))
            // {dest: './uploads'} // second param in fileinterceptor
    uploadSingle(@UploadedFile() file) {
        return this.fileService.create(file)
    }
    // create(@Body() file) {return this.fileService.create(file)}

    @Get("all")
    getAll() {
        return this.fileService.getAll()
    }

    @Get(':id')
    findOne(@Param() params) {
        return this.fileService.getById(params.id)
    }
}
