export interface Car {
    ownerId: string,
    name: string,
    year: number,
    shortRent: number,
    midRent: number,
    longRent: number,
    type: string,
    drive: string,
    transmission: string,
    engine: string,
    run: number,
    options?: [],
    imgSM?: string,
    photos?: []
}
