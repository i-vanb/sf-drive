import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // c(): string {
  //   return this.appService.getHome();
  // }
  // @Get('about')
  // f(): string {
  //   return this.appService.getAbout();
  // }



}
