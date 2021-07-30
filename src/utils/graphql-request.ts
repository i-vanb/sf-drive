import {gql} from "@apollo/react-hooks";

export const FETCH_USER_QUERY = gql`
    {
        getAllUsers {
            id
            name
            email
        }
    }
`;
