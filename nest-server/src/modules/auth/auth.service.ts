import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from "../users/user.service";
import {User} from "../../interfaces/users.interface";
import {Token} from "../../interfaces/token.interface";
import {TokenPayload} from "../../interfaces/token.payload.interface";
import {TokenService} from "../token/token.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private readonly tokenService: TokenService) {}

    async signup(user: User): Promise<Token> {
        const isUserExists = await this.usersService.findByMail(user.mail);
        if(isUserExists) throw new HttpException('Mail is already exist', HttpStatus.CONFLICT);
        const newUser = await this.usersService.createUser(user);
        const payload:TokenPayload = {
            userName: newUser.name,
            userID: newUser._id
        }
        return this.tokenService.getTokenPair(payload);
    }

    async login(login: string, password: string): Promise<Token> {
        const user = await this.usersService.findByMail(login);
        if(!user || password !== user.password)
            throw new HttpException('Login or password is incorrect', HttpStatus.NOT_FOUND);

        const payload:TokenPayload = {
            userName: user.name,
            userID: user._id
        }
        return this.tokenService.getTokenPair(payload);
    }



    changeUserProp(login:string, prop:string, value:string) {
        this.usersService.changeUserProp(login, prop, value)
    }

    find(mail: string): Promise<User> {
        return this.usersService.findByMail(mail);
    }
    create(user: User): string {
        this.usersService.createUser(user);
        return "user is successfully created";
    }
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }
}
