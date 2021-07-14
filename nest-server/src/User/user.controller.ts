import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";

// it is needed only for testing
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("create")
    create(@Body() user) {
        return this.userService.create(user)
    }

    @Get("all")
    getAll() {
        return this.userService.getAll()
    }

    @Post("update")
    update(@Body() user) {
        return this.userService.update(user)
    }

    @Post("find")
    findByMail(@Body() body) {
        return this.userService.findByMail(body.mail)
    }

    @Post("del")
    removeUser(@Body() body) {
        return this.userService.removeUser(body.id)
    }

}
