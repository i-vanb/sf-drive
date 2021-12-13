import {gql} from "@apollo/react-hooks";

export const FETCH_All_CARS_QUERY = gql`
    {
     allCars {
        id
        mark
        model
        number
        pts
        sts
        ownerId
        power_ls
        power_kvt
        vin
        color
        volume
        year
        price
        price_3d
        price_5d
        transmission
        engine_type
        run
        city
        isLosfix 
        isAirbags 
        isHeater 
        isAuxCable 
        isBluetooth 
        isCruise 
        isConditioning 
        isMultimedia 
        isNavigation
        isSeatsVentilation 
        isSeatsHeat 
        isRoofRack 
        isParktronic 
        isCamera 
        isChildrenSeat 
        isCarDelivery 
        isFreePlace
        isFuel 
        childrenSeatPrice 
        carDeliveryPrice 
        freePlacePrice 
        fuelPrice
     }  
}
`;

export const FETCH_CARS_BY_CITY_QUERY = gql`
    query findByCity($city: String!) {
      findAllCarsByCity(city: $city) {
        id
        mark
        model
        number
        pts
        sts
        ownerId
        power_ls
        power_kvt
        vin
        color
        volume
        year
        price
        price_3d
        price_5d
        transmission
        engine_type
        run
        city
        isLosfix 
        isAirbags 
        isHeater 
        isAuxCable 
        isBluetooth 
        isCruise 
        isConditioning 
        isMultimedia 
        isNavigation
        isSeatsVentilation 
        isSeatsHeat 
        isRoofRack 
        isParktronic 
        isCamera 
        isChildrenSeat 
        isCarDelivery 
        isFreePlace
        isFuel 
        childrenSeatPrice 
        carDeliveryPrice 
        freePlacePrice 
        fuelPrice
      }
    }
`;

export const FETCH_CAR_BY_ID_QUERY = gql`
    query findById($id: ID!) {
      findById(id: $id) {
        id
        docs
        photos
        mark
        model
        number
        pts
        sts
        ownerId
        power_ls
        power_kvt
        vin
        color
        volume
        year
        price
        price_3d
        price_5d
        transmission
        engine_type
        run
        city
        isLosfix 
        isAirbags 
        isHeater 
        isAuxCable 
        isBluetooth 
        isCruise 
        isConditioning 
        isMultimedia 
        isNavigation
        isSeatsVentilation 
        isSeatsHeat 
        isRoofRack 
        isParktronic 
        isCamera 
        isChildrenSeat 
        isCarDelivery 
        isFreePlace
        isFuel 
        childrenSeatPrice 
        carDeliveryPrice 
        freePlacePrice 
        fuelPrice
      }
    }
`;

export const CREATE_CAR_REQUEST = gql`
    mutation CreateCar($createCarInput: CreateCarInput!) {
        createCar(createCarInput: $createCarInput) {
            id
            mark
            model
            number
            pts
            sts
            ownerId
            power_ls
            power_kvt
            vin
            color
            volume
            year
            price
            price_3d
            price_5d
            transmission
            engine_type
            run
            city
            isLosfix 
            isAirbags 
            isHeater 
            isAuxCable 
            isBluetooth 
            isCruise 
            isConditioning 
            isMultimedia 
            isNavigation
            isSeatsVentilation 
            isSeatsHeat 
            isRoofRack 
            isParktronic 
            isCamera 
            isChildrenSeat 
            isCarDelivery 
            isFreePlace
            isFuel 
            childrenSeatPrice 
            carDeliveryPrice 
            freePlacePrice 
            fuelPrice
        }
    }
`;

export const FETCH_All_BOOKING_QUERY = gql`
     query ($id: Int!) {
      allBooking(id: $id) {
        passengerID
        carID
        ownerID
        begin
        end
        duration
        description
        isCarDelivery
        totalPrice
        carDeliveryPrice
        isChildSeat
        childSeatPrice
        isAnyPlaceEnd
        anyPlaceEndPrice
        isArchived
        mark
        model
        year
      }
    }
`;

export const FETCH_BOOKING_BY_ID_QUERY = gql`
     query ($id: Int!) {
      findBookingById(id: $id) {
        passengerID
        carID
        ownerID
        begin
        end
        duration
        description
        isCarDelivery
        totalPrice
        carDeliveryPrice
        isChildSeat
        childSeatPrice
        isAnyPlaceEnd
        anyPlaceEndPrice
        isArchived
        mark
        model
        year
      }
    }
`;

export const CREATE_BOOKING_REQUEST = gql`
    mutation CreateBooking($createBookingInput: CreateBookingInput!) {
        createBooking(createBookingInput: $createBookingInput) {
            id
            passengerID
            carID
            ownerID
            begin
            end
            duration
            description
            isCarDelivery
            totalPrice
            carDeliveryPrice
            isChildSeat
            childSeatPrice
            isAnyPlaceEnd
            anyPlaceEndPrice
            isArchived
            mark
            model
            year
        }
    }
`;
