import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {UsersService} from "../users/user.service";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {ACCESS_TOKEN_SECRET} from "../token/token.config";
import {TokenService} from "../token/token.service";


@Module({
  imports: [UsersModule, JwtModule.register({ secret: ACCESS_TOKEN_SECRET })],
  controllers: [AuthController],
  providers: [AuthService, UsersService, TokenService]
})
export class AuthModule {}
