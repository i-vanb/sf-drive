import {Module} from '@nestjs/common';
import {TokenService} from "./token.service";
import {TokenController} from "./token.controller";
import {JwtModule} from "@nestjs/jwt";
import {ACCESS_TOKEN_SECRET} from "./token.config";

@Module({
    imports: [JwtModule.register({ secret: ACCESS_TOKEN_SECRET })],
    providers: [TokenService],
    exports: [TokenService],
    controllers: [TokenController]
})
export class TokenModule {}
