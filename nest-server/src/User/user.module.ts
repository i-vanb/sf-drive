import {Module} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {UsersRepository} from "../Repositories/users.repository";

@Module({
    providers: [UserService, UsersRepository],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
