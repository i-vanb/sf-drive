import {Resolver, Query, Args, Mutation} from "@nestjs/graphql";
import {CarService} from "./car.service";
import {CreateCarInput} from "../graphql";


@Resolver()
export class CarResolver {
    constructor(private readonly carService: CarService) {}

    @Query()
    allCars() {
        return this.carService.getAll()
    }

    @Query()
    findById(@Args('id') id: number) {
        return this.carService.findById(id)
    }

    @Query()
    findAllCarsByMark(@Args('mark') mark: string) {
        return this.carService.findByMark(mark)
    }

    @Query()
    findAllCarsByCity(@Args('city') city: string) {
        return this.carService.findByCity(city)
    }

    @Mutation()
    createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
        return this.carService.create(createCarInput)
    }
}
