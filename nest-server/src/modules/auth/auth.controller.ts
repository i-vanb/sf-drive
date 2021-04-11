import {Controller, Get, Post, Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {User} from "../../interfaces/users.interface";
import {Token} from "../../interfaces/token.interface";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Request() req): Promise<Token>{
    return this.authService.signup(req.body)
  }

  @Post('login')
  login(@Request() req): Promise<Token> {
    return this.authService.login(req.body.login, req.body.password)
  }

  @Post('create')
  createUser(@Request() req): string {
    // console.log(req.body)
    return this.authService.create(req.body);
  }

  @Get('all')
  getAll(): Promise<User[]> {
    return this.authService.getAll();
  }

  @Post('find')
  find(@Request() req): Promise<User> {
    console.log(req.body.mail)
    return this.authService.find(req.body.mail)
  }

  @Post('change')
  changeUserProp(@Request() req) {
    this.authService.changeUserProp(req.body.login, req.body.prop, req.body.value)
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req) {
  //   return req.user;
  // }
}
