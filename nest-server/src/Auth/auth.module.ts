import {Module} from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserModule} from "../User/user.module";
import {TokenModule} from "../Token/token.module";

@Module({
    imports: [UserModule, TokenModule],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule {}
