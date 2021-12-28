import {Injectable} from "@nestjs/common";
import {ChatEntity} from "../chats/chat.entity";
import {Like, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Chat} from "../chats/chat.interface";

@Injectable()
export class ChatRepository {
    constructor(
        @InjectRepository(ChatEntity)
        private chatRepository: Repository<ChatEntity>
    ) {}

    async createChat(chat: ChatEntity) {
        const newChat = await this.chatRepository.create(chat)
        return this.chatRepository.save(newChat)
    }

    async getChats(id: number) {
        const list = await this.chatRepository.find({
            where: [{fromId: id},{toId: id}]
        })
        return list
    }
}
