import {Module} from '@nestjs/common';
import {ChatService} from "./chat.service";
import {ChatController} from "./chat.controller";
import {ChatRepository} from "../Repositories/chat.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ChatEntity} from "./chat.entity";



@Module({
    imports: [TypeOrmModule.forFeature([ChatEntity])],
    providers: [ChatService, ChatRepository],
    controllers: [ChatController],
    exports: [ChatService]
})
export class ChatModule {}
