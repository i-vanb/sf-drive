import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {User} from "../User/user.interface";
import {TokenPair} from "../Token/token.interface";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("me")
  async me(@Body() body) {
    return this.authService.me(body.accessToken);
  }

  @Post("me/refresh")
  async refresh(@Body() body) {
    return this.authService.refresh(body.refreshToken);
  }

  @Post("signup")
  async signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }

  @Post("login")
  login(@Body() {mail, password}) {
    if(!mail || !password)
      throw new HttpException('Данные не соответствуют интерфейсу LoginData', HttpStatus.NOT_FOUND);
    return this.authService.login({mail, password});
  }



}
