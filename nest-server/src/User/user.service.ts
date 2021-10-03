import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UserEntity} from "./user.entity";
import {User} from "./user.interface";
import {UsersRepository} from "../Repositories/users.repository";

@Injectable()
export class UserService {
    constructor(private userRepository: UsersRepository) {}

    async create(user: User):Promise<UserEntity> {
        const newUser = new UserEntity(user.name, user.mail, user.phone, user.birth_date, user.passport_number,
            user.passport_date, user.passport_vendor, user.passport_code, user.licence_number, user.licence_date, user.password
        );
        return await this.userRepository.createUser(newUser);
    }

    async findByMail(mail: string):Promise<UserEntity> {
        return await this.userRepository.findUser(mail)
    }

    async getAll():Promise<UserEntity[]> {
        return await this.userRepository.getUsers()
    }


    async update(user) {
        const existingUser = await this.findByMail(user.mail)
        if(!existingUser) throw new HttpException('Mail is not found', HttpStatus.NOT_FOUND);
        Object.keys(user).map(i =>  existingUser[i] = user[i])
        return await this.userRepository.update(existingUser)
    }

    async removeUser(id) {
        return await this.userRepository.removeUser(id)
    }
}
