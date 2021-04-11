import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./user.schema";
import {UsersService} from "./user.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [],
  providers: [UsersService],
  exports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])]
})

export class UsersModule {}
