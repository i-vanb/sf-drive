import {Injectable} from "@nestjs/common";
import {UserEntity} from "../User/user.entity";
import {getMongoRepository, ObjectID} from "typeorm";

@Injectable()
export class UsersRepository {
    async createUser(user: UserEntity) {
        const repository = getMongoRepository(UserEntity)
        return await repository.save(user)
    }

    async update(user: UserEntity) {
        const repository = getMongoRepository(UserEntity)
        return await repository.save(user)
    }

    async findUser(mail: string) {
        const repository = getMongoRepository(UserEntity)
        return await repository.findOne( {mail:mail})
    }

    async getUsers() {
        const repository = getMongoRepository(UserEntity)
        return await repository.find()
    }

    async removeUser(id: ObjectID) {
        const repository = getMongoRepository(UserEntity)
        return await repository.delete(id)
    }
}
