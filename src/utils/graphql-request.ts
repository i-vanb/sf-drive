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
      }
    }
`;
