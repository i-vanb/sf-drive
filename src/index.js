import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "./styles/preload.css";
import {apolloClient} from "./utils/apollo-client";
import {ApolloProvider} from "@apollo/client";


ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </ApolloProvider>
    ,
    document.getElementById('root')
);
