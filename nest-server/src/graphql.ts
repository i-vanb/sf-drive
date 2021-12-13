
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateCarInput {
    ownerId: string;
    number: string;
    pts: string;
    sts: string;
    power_ls: string;
    power_kvt: string;
    mark: string;
    model: string;
    vin: string;
    color: string;
    volume: string;
    year: string;
    price: number;
    price_3d: number;
    price_5d: number;
    transmission: string;
    engine_type: string;
    run: string;
    city: string;
    docs: string[];
    photos: string[];
    isLosfix: boolean;
    isAirbags: boolean;
    isHeater: boolean;
    isAuxCable: boolean;
    isBluetooth: boolean;
    isCruise: boolean;
    isConditioning: boolean;
    isMultimedia: boolean;
    isNavigation: boolean;
    isSeatsVentilation: boolean;
    isSeatsHeat: boolean;
    isRoofRack: boolean;
    isParktronic: boolean;
    isCamera: boolean;
    isChildrenSeat: boolean;
    isCarDelivery: boolean;
    isFreePlace: boolean;
    isFuel: boolean;
    childrenSeatPrice: number;
    carDeliveryPrice: number;
    freePlacePrice: number;
    fuelPrice: number;
}

export interface CreateBookingInput {
    passengerID: number;
    carID: number;
    ownerID: number;
    begin: string;
    end: string;
    duration: string;
    description: string;
    isCarDelivery: boolean;
    totalPrice: number;
    carDeliveryPrice: number;
    isChildSeat: boolean;
    childSeatPrice: number;
    isAnyPlaceEnd: boolean;
    anyPlaceEndPrice: number;
    isArchived: boolean;
    mark: string;
    model: string;
    year: number;
}

export interface Car {
    id: string;
    ownerId: string;
    number: string;
    pts: string;
    sts: string;
    power_ls: string;
    power_kvt: string;
    mark: string;
    model: string;
    vin: string;
    color: string;
    volume: string;
    year: string;
    price: number;
    price_3d: number;
    price_5d: number;
    transmission: string;
    engine_type: string;
    run: string;
    city: string;
    docs: string[];
    photos: string[];
    isLosfix: boolean;
    isAirbags: boolean;
    isHeater: boolean;
    isAuxCable: boolean;
    isBluetooth: boolean;
    isCruise: boolean;
    isConditioning: boolean;
    isMultimedia: boolean;
    isNavigation: boolean;
    isSeatsVentilation: boolean;
    isSeatsHeat: boolean;
    isRoofRack: boolean;
    isParktronic: boolean;
    isCamera: boolean;
    isChildrenSeat: boolean;
    isCarDelivery: boolean;
    isFreePlace: boolean;
    isFuel: boolean;
    childrenSeatPrice: number;
    carDeliveryPrice: number;
    freePlacePrice: number;
    fuelPrice: number;
}

export interface IQuery {
    allCars(): Car[] | Promise<Car[]>;
    findById(id: string): Nullable<Car> | Promise<Nullable<Car>>;
    findAllCarsByMark(mark: string): Car[] | Promise<Car[]>;
    findAllCarsByCity(city: string): Car[] | Promise<Car[]>;
    allBooking(id: number): Booking[] | Promise<Booking[]>;
    findBookingById(id: number): Booking | Promise<Booking>;
}

export interface IMutation {
    createCar(createCarInput: CreateCarInput): Car | Promise<Car>;
    createBooking(createBookingInput: CreateBookingInput): Booking | Promise<Booking>;
}

export interface Booking {
    id: string;
    passengerID: number;
    carID: number;
    ownerID: number;
    begin: string;
    end: string;
    duration: string;
    description: string;
    totalPrice: number;
    isCarDelivery: boolean;
    carDeliveryPrice: number;
    isChildSeat: boolean;
    childSeatPrice: number;
    isAnyPlaceEnd: boolean;
    anyPlaceEndPrice: number;
    isArchived: boolean;
    mark: string;
    model: string;
    year: number;
}

type Nullable<T> = T | null;
