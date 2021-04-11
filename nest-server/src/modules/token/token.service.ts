import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {TokenPayload} from "../../interfaces/token.payload.interface";
import {Token} from "../../interfaces/token.interface";
import {ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE, REFRESH_TOKEN_SECRET} from "./token.config";

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService) {}

    getTokenPair(payload:TokenPayload):Token {
        const accessToken = this.jwtService.sign(payload, {expiresIn: ACCESS_TOKEN_LIFE});
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: REFRESH_TOKEN_LIFE,
            secret: REFRESH_TOKEN_SECRET});
        return {accessToken, refreshToken};
    }

    
}
