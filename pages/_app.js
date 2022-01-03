import '../src/Messages/style.css'
import '../src/components/calendar/style.css'
import '../src/components/payment/style.css'
import '../src/components/review/style.css'
import '../src/components/ui/checkBoxInput/style.css'
import '../src/components/ui/checkBoxSlider/style.css'
import '../src/components/ui/input/style.css'
import "../src/styles/MobileMenu.css"
import "../src/styles/Main.css"
import "../src/styles/Faq.css"
import "../src/styles/Header.css"
import "../src/styles/App.css"
import "../src/styles/Normalize.css"
import "../src/styles/Footer.css"
import "../src/styles/Register.css"
import "../src/styles/Searching.css"
import "../src/styles/Sign.css"
import "../src/styles/Header.css"
import "../src/styles/About.css"
import "../src/styles/Car.css"
import "../src/styles/camera.css"
import "../src/styles/preload.css"
import "../src/styles/profile.css"
import {apolloClient} from "../src/utils/apollo-client";
import {Provider} from "react-redux";
import {store} from "../src/redux/store";
import {ApolloProvider} from "@apollo/client";
import React from "react";
import {HeaderContainer} from "../src/components/Header/HeaderContainer";
import AppContainer from "../src/components/AppContainer";

function MyApp({Component, pageProps}) {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <AppContainer>
                    <HeaderContainer/>
                    <Component {...pageProps} />
                </AppContainer>
            </Provider>
        </ApolloProvider>
    )
}

export default MyApp
