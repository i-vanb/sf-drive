import { Injectable } from '@nestjs/common';
import {User} from "../../interfaces/users.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findByMail(mail: string): Promise<User> {
    return this.userModel.findOne({mail: mail});
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async changeUserProp( login:string, prop: string, value: string ) {
    const user = await this.userModel.findOneAndUpdate({ mail: login }, {
      [prop]: value
    }, {"new": true});
  }
}
