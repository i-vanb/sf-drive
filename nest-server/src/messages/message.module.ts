import {Module} from '@nestjs/common';
import {MessageService} from "./message.service";
import {MessageController} from "./message.controller";
import {MessageRepository} from "../Repositories/message.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "./message.entity";
import {ChatModule} from "../chats/chat.module";



@Module({
    imports: [TypeOrmModule.forFeature([MessageEntity]), ChatModule],
    providers: [MessageService, MessageRepository],
    controllers: [MessageController],
    exports: [MessageService]
})
export class MessageModule {}
