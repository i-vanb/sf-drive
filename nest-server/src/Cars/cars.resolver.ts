import {Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {CarService} from "./car.service";
import {CarsEntity} from "./car.entity";
import {Column} from "typeorm";
import {ObjectType} from "type-graphql";


class meEntity {
    constructor(name) {
        this.name = name
    }

    @Column()
    name: string
}

@Resolver(of => CarsEntity)
export class CarsResolver {
    constructor(
    private carService: CarService
        //     private authorsService: AuthorsService,
    //     private postsService: PostsService,
    ) {}

    @Query(returns => [CarsEntity])
    async car() {
        return this.carService.getAll();
        // return [{name: "Ivan"}];
    }
}
