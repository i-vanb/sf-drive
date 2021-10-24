import {ApolloClient, InMemoryCache} from '@apollo/client';

const GRAPHQL_SERVER_URL = 'http://localhost:8000/graphql';

export const apolloClient = new ApolloClient({
    uri: GRAPHQL_SERVER_URL,
    cache: new InMemoryCache()
})
