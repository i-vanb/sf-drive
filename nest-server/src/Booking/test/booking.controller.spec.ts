import {Test, TestingModule} from "@nestjs/testing";
import {BookingController} from "../booking.controller";
import {BookingService} from "../booking.service";
import {BookingRepository} from "../../Repositories/booking.repository";
import {INestApplication} from "@nestjs/common";
import * as request from 'supertest'
import {TokenService} from "../../Token/token.service";
import {TokenModule} from "../../Token/token.module";
import {JwtService} from "@nestjs/jwt";


const mockBooking = {
    passengerID: 1,
    carID: 1,
    ownerID: 1,
    begin: '',
    end: '',
    duration: '',
    description: '',
    isCarDelivery: false,
    totalPrice: 0,
    carDeliveryPrice: 0,
    isChildSeat: false,
    childSeatPrice: 0,
    isAnyPlaceEnd: false,
    anyPlaceEndPrice: 0,
    isArchived: false,
    mark: '',
    model: '',
    year: 0,
    expires_in: '',
    is_payed: false,
}

const mockBookings = [mockBooking]

const bookingRepositoryMock = {
    createRide:jest.fn().mockReturnValue(mockBookings),
    update:jest.fn().mockReturnValue(mockBooking),
    findRide:jest.fn().mockReturnValue(mockBooking),
    findRides:jest.fn().mockReturnValue(mockBookings),
    removeRide:jest.fn().mockReturnValue(undefined)
}

describe('Booking Controller', ()=>{
    let app:INestApplication

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BookingController],
            providers: [BookingService,
                {
                provide: BookingRepository,
                useFactory: ()=>({
                    createRide:jest.fn().mockReturnValue(mockBooking),
                    update:jest.fn().mockReturnValue(mockBooking),
                    findRide:jest.fn().mockReturnValue(mockBooking),
                    findRides:jest.fn().mockReturnValue(mockBookings),
                    removeRide:jest.fn().mockReturnValue(undefined)
                })

                },
                {
                    provide: TokenService,
                    useFactory: ()=>({
                        createPaymentToken:jest.fn().mockReturnValue('payment_test_token')
                    })

                }
            ]
        }).compile();

        app = module.createNestApplication()
        await app.init()
    });
    it('should get booking', async () => {
        await request(app.getHttpServer())
            .post('/booking/find')
            .send({id:1})
            .expect(201)
            .expect(mockBooking)
    });
    it('should get bookings', async () => {
        await request(app.getHttpServer())
            .get('/booking')
            .expect(200)
            .expect(mockBookings)
    });
    it('should create booking', async () => {
        await request(app.getHttpServer())
            .post('/booking/create')
            .send(mockBooking)
            .expect(201)
            .expect({booking:mockBooking,token:'payment_test_token'})
    });
    it('should update booking', async () => {
        await request(app.getHttpServer())
            .post('/booking/update')
            .send(mockBooking)
            .expect(201)
            .expect(mockBooking)
            // .expect({booking:mockBooking,token:'payment_test_token'})
    });
    it('should delete booking', async () => {
        await request(app.getHttpServer())
            .delete('/booking/remove')
            .send({id:1})
            .expect(200)
    });
})
