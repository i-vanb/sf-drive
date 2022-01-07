import {CarsRepository} from "../../Repositories/cars.repository";
import {CarService} from "../car.service";
import {Test, TestingModule} from "@nestjs/testing";
import mock = jest.mock;

const mockCar = {ownerId:'1', mark:'', model:'', number:'', year:'', color:'', vin:'', engine_type:'', volume:'',
    power_ls:'', power_kvt:'', transmission:'', run:'', pts:'', sts:'', price:0, price_3d:0, price_5d:0, city:'',
    docs:[], photos:[], isLosfix:false, isAirbags:false, isHeater:false, isAuxCable:false, isBluetooth:false,
    isCruise:false, isConditioning:false, isMultimedia:false, isNavigation:false, isSeatsVentilation:false,
    isSeatsHeat:false, isRoofRack:false, isParktronic:false, isCamera:false, isChildrenSeat:false, isCarDelivery:false,
    isFreePlace:false, isFuel:false, childrenSeatPrice:0, carDeliveryPrice:0, freePlacePrice:0, fuelPrice:0}

describe('Car Service', ()=>{
    let carService: CarService
    let carsRepository: CarsRepository

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [CarService, {
                provide: CarsRepository,
                useFactory: ()=>({
                        getCars: jest.fn(() => []),
                        createCar: jest.fn(() => ({...mockCar, id:1})),
                        findCars: jest.fn((query) => [{...mockCar, id:1, ownerId: query.ownerId}]),
                        getByOwner: jest.fn((id) => [{...mockCar, id:1}]),
                        findCar: jest.fn(() => ({...mockCar, id:20})),
                        getCarsByMark: jest.fn((mark) => [{...mockCar, id:1, mark}]),
                        getCarsByCity: jest.fn((city) => [{...mockCar, id:1, city}]),
                        removeCar: jest.fn(() => {})
                })
                // useClass: CarsRepositoryMock
            }],
        }).compile();

        carService = app.get(CarService)
        carsRepository = app.get(CarsRepository)
    });

    it('should call carsRepository.getAll on call getAll method in service', function () {
        // const carsRepositorySpy = jest.spyOn(carsRepository, 'getCars').mockReturnValue(mockCars)
        carService.getAll()
        expect(carsRepository.getCars).toHaveBeenCalled()
    });
    it('should call carsRepository.create on call create method in service', function () {
        const res = carService.create(mockCar)
        expect(res).toEqual({...mockCar, id: 1})
    });
    it('should find cars by query', function () {
        const res = carService.findCars({ownerId: '1'})
        expect(carsRepository.findCars).toHaveBeenCalled()
        expect(res).toEqual([{...mockCar, id: 1}])
    });
    it('should get cars[] by ownerId', function () {
        const res = carService.getByOwner(1)
        expect(carsRepository.getByOwner).toHaveBeenCalled()
        expect(res).toEqual([{...mockCar, id: 1}])
    });
    it('should get car by id', function () {
        const res = carService.findById(20)
        expect(carsRepository.findCar).toHaveBeenCalled()
        expect(res).toEqual({...mockCar, id: 20})
    });
    it('should get car by mark', function () {
        const res = carService.findByMark('test mark')
        expect(carsRepository.getCarsByMark).toHaveBeenCalled()
        expect(res).toEqual([{...mockCar, id: 1, mark: 'test mark'}])
    });
    it('should get car by city', function () {
        const res = carService.findByCity('test city')
        expect(carsRepository.getCarsByCity).toHaveBeenCalled()
        expect(res).toEqual([{...mockCar, id: 1, city: 'test city'}])
    });
    it('should call remove car in repository', function () {
        const res = carService.removeCar(1)
        expect(carsRepository.removeCar).toHaveBeenCalled()
    });

})
