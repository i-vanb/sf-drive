import {Injectable} from "@nestjs/common";
import {UserEntity} from "../User/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    async createUser(user: UserEntity) {
        const newUser = await this.userRepository.create(user)
        return await this.userRepository.save(newUser)
    }

    async update(update: UserEntity) {
        return await this.userRepository.save(update)
    }

    async findUser(mail: string) {
        return await this.userRepository.findOne({mail: mail})
    }

    async findUserById(id: string) {
        const user = await this.userRepository.findByIds([id])
        return user[0]
    }

    async getUsers() {
        return await this.userRepository.find()
    }

    async removeUser(id: number) {
        const user = await this.userRepository.findByIds([id])
        return await this.userRepository.remove(user)
    }
}
