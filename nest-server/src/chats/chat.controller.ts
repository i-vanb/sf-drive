import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {ChatService} from "./chat.service";

@Controller("chat")
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Post("create")
    create(@Body() chat) {
        return this.chatService.create(chat)
    }

    @Get(':id')
    getChats(@Param() params) {
        return this.chatService.getChats(params.id)
    }
}
