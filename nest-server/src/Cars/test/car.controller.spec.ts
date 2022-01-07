import {CarService} from "../car.service";
import {Test, TestingModule} from "@nestjs/testing";
import {CarController} from "../car.controller";

const mockCars = [{ownerId:'1', mark:'', model:'', number:'', year:'', color:'', vin:'', engine_type:'', volume:'',
    power_ls:'', power_kvt:'', transmission:'', run:'', pts:'', sts:'', price:0, price_3d:0, price_5d:0, city:'',
    docs:[], photos:[], isLosfix:false, isAirbags:false, isHeater:false, isAuxCable:false, isBluetooth:false,
    isCruise:false, isConditioning:false, isMultimedia:false, isNavigation:false, isSeatsVentilation:false,
    isSeatsHeat:false, isRoofRack:false, isParktronic:false, isCamera:false, isChildrenSeat:false, isCarDelivery:false,
    isFreePlace:false, isFuel:false, childrenSeatPrice:0, carDeliveryPrice:0, freePlacePrice:0, fuelPrice:0}]

describe('Car Controller', ()=>{
    let carService:CarService
    let carController:CarController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CarController],
            providers: [CarService, {
                provide: CarService,
                useFactory: ()=>({
                        findCars: jest.fn((query) => ({...mockCars, id:query.id})),
                        getAll: jest.fn(() => [])
                })
                // useClass: CarsRepositoryMock
            }],
        }).compile();

        carController = app.get(CarController)
        carService = app.get(CarService)
    });
    it('should call carService.findCars on call getCars method in controller', function () {
        // const carsRepositorySpy = jest.spyOn(carsRepository, 'getCars').mockReturnValue(mockCars)
        const res = carController.getCars({id:6})
        expect(carService.findCars).toHaveBeenCalled()
        expect(res).toEqual({...mockCars, id: 6})
    });
    it('should call carService.getAll on call getAll method in controller', function () {
        const res = carController.getAll()
        expect(carService.getAll).toHaveBeenCalled()
        expect(res).toEqual([])
    });

})
