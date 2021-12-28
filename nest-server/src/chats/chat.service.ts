import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ChatEntity} from "./chat.entity";
import {Chat} from "./chat.interface";
import {ChatRepository} from "../Repositories/chat.repository";

@Injectable()
export class ChatService {
    constructor(private chatRepository: ChatRepository) {}

    async create(chat: Chat):Promise<ChatEntity> {
        const newChat = new ChatEntity(
            chat.fromId, chat.toId, chat.toUsername, chat.carId, chat.date
        );
        return await this.chatRepository.createChat(newChat);
    }

    async getChats(id: number):Promise<ChatEntity[]>{
        return this.chatRepository.getChats(id)
    }
}
