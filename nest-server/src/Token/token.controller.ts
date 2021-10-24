import {Body, Controller, Get, Post} from "@nestjs/common";
import {TokenService} from "./token.service";
import {TokenPayload} from "./token.interface";

@Controller("token")
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Post("pair")
    createPair(@Body() payload: TokenPayload) {
        return this.tokenService.createPair(payload)
    }

    // @Post("new")
    // sign(@Body() body) {
    //     return this.tokenService.signTestToken(body)
    // }
    //
    @Post("dec")
    decode(@Body() payload) {
        return this.tokenService.decodeToken(payload.token)
    }

    @Post("temp")
    temp(@Body() payload: TokenPayload) {
        return this.tokenService.createTemp(payload)
    }
}
