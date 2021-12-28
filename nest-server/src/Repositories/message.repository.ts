import {Injectable} from "@nestjs/common";
import {MessageEntity} from "../messages/message.entity";
import {Like, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Message} from "../messages/message.interface";

@Injectable()
export class MessageRepository {
    constructor(
        @InjectRepository(MessageEntity)
        private messageRepository: Repository<MessageEntity>
    ) {}

    async createMessage(message: MessageEntity) {
        const newMessage = await this.messageRepository.create(message)
        return this.messageRepository.save(newMessage)
    }

    async updateMessage(message: MessageEntity) {
        return await this.messageRepository.save(message)
    }

    async getMessages(id: number) {
        const list = await this.messageRepository.find({
            // where: [{fromId: id},{toId: id}]
            where: {chat_id: id}
        })
        return list
    }

    // async getMessageById(id: number) {
    //     return await this.messageRepository.findByIds([id])
    // }

    async deleteMessage(id: number) {
        const message = await this.messageRepository.findByIds([id])
        return await this.messageRepository.remove(message)
    }
}
