import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {MessageService} from "./message.service";

@Controller("message")
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Post("create")
    create(@Body() message) {
        return this.messageService.create(message)
    }

    @Get(':id')
    getMessages(@Param() params) {
        return this.messageService.getMessages(params.id)
    }

    @Post("update")
    update(@Body() message) {
        return this.messageService.updateMessage(message)
    }

    @Delete(':id')
    removeC(@Param() params) {
        return this.messageService.deleteMessage(params.id)
    }

    // @Post('test')
    // async test() {
    //     return await this.messageService.test({
    //         fromId: 1,
    //         toId: 2,
    //         toUsername: 'user2',
    //         toEmail: 'user2@',
    //         subject: 'any subject',
    //         carId: 922,
    //         text: 'Text of message',
    //         date: '22.12.21',
    //         chat_id: '3'
    //     })
    // }

}
