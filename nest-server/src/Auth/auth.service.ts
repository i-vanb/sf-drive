import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserService} from "../User/user.service";
import {User} from "../User/user.interface";
import {TokenPair} from "../Token/token.interface";
import {TokenService} from "../Token/token.service";
import {LoginData} from "./auth.interface";
import {REFRESH_TOKEN_SECRET} from "../Token/token.config";


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
    ) {}

    async signUp(user: User) {
        // throw new HttpException('Mail is already exist', HttpStatus.CONFLICT);
        const isUserExists = await this.userService.findByMail(user.mail);
        if(isUserExists) throw new HttpException('Mail is already exist', HttpStatus.CONFLICT);
        const newUser = await this.userService.create(user);
        const payload = {
            userName: newUser.name,
            userID: newUser.id
        }
        const tokenData = await this.tokenService.createPair(payload);
        return {...payload, ...tokenData}
    }

    async login(userData: LoginData) {
        const user = await this.userService.findByMail(userData.mail)
        if(!user) throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
        if(userData.password !== user.password) throw new HttpException('Password is incorrect', HttpStatus.NOT_ACCEPTABLE)
        // return await this.tokenService.createPair({userName: user.name, userID: user._id})
        const payload = {userName: user.name, userID: user.id}
        const tokenData = await this.tokenService.createPair(payload);
        return {...payload, ...tokenData}
    }

    me(accessToken) {
        try {
            this.tokenService.verifyToken(accessToken);
        } catch (err) {
            throw new HttpException('Token is invalid', HttpStatus.NOT_ACCEPTABLE);
        }
        return this.tokenService.decodeToken(accessToken);
    }

    refresh(refreshToken) {
        try {
            this.tokenService.verifyToken(refreshToken, REFRESH_TOKEN_SECRET);
        } catch (err) {
            throw new HttpException('Token is invalid', HttpStatus.NOT_ACCEPTABLE)

        }
        const tokenData = this.tokenService.decodeToken(refreshToken);
        const payload = {
            userName: tokenData.userName,
            userID: tokenData.userID
        }
        return this.tokenService.createPair(payload)
    }
}
