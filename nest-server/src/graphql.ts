
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
}

export interface IQuery {
    allCars(): Car[] | Promise<Car[]>;
    findById(id: string): Nullable<Car> | Promise<Nullable<Car>>;
    findAllCarsByMark(mark: string): Car[] | Promise<Car[]>;
    findAllCarsByCity(city: string): Car[] | Promise<Car[]>;
}

export interface IMutation {
    createCar(createCarInput: CreateCarInput): Car | Promise<Car>;
}

type Nullable<T> = T | null;
