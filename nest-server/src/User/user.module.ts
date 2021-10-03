import {Module} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {UsersRepository} from "../Repositories/users.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UsersRepository],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
