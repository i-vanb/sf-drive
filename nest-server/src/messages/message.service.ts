import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {MessageEntity} from "./message.entity";
import {Message} from "./message.interface";
import {MessageRepository} from "../Repositories/message.repository";
import {ChatService} from "../chats/chat.service";

@Injectable()
export class MessageService {
    constructor(
        private messageRepository: MessageRepository,
        private chatService: ChatService) {}

    async create(message: Message):Promise<MessageEntity> {
        const chatId = message.chat_id
            ? message.chat_id
            : await this.chatService.create({
                fromId: message.fromId,
                toId: message.toId,
                toUsername: message.toUsername,
                carId: message.carId,
                date: Date.now().toString()
            }).then(chat => chat.id)

        const newMessage = new MessageEntity(
            message.fromId, message.toId, message.toUsername, message.toEmail, message.subject, message.carId,
            message.text, message.date, chatId
        );
        return await this.messageRepository.createMessage(newMessage);
    }

    async updateMessage(message: MessageEntity):Promise<MessageEntity> {
        return this.messageRepository.updateMessage(message)
    }

    async getMessages(id: number):Promise<MessageEntity[]>{
        return this.messageRepository.getMessages(id)
    }

    async deleteMessage(id: number) {
        return this.messageRepository.deleteMessage(id)
    }

    // async test(message: Message) {
    //     const chatId = message.chat_id
    //         ? message.chat_id
    //         : await this.chatService.create({
    //             fromId: message.fromId,
    //             toId: message.toId,
    //             toUsername: message.toUsername,
    //             carId: message.carId,
    //             date: Date.now().toString()
    //         }).then(chat => chat.id)
    //
    //     console.log(chatId)
    // }
}
