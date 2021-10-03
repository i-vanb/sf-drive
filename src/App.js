import {Switch, Route, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import "./styles/MobileMenu.css"
import "./styles/Header.css"
import "./styles/App.css";
import "./styles/Normalize.css";
import "./styles/Footer.css"
import "./styles/Register.css"
import "./styles/Searching.css"
import "./styles/Sign.css"
import "./styles/Header.css"
import "./styles/About.css"
import "./styles/Car.css"

import About from "./About/About";
import Faq from "./Faq/Faq";
import {Sign} from "./Register/Sign";
import Header from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {authMe} from "./redux/action/auth";
import RegisterContainer from "./Register/RegisterContainer";
import {RegSuccess} from "./Register/RegSuccess";
import BookingsContainer from "./Bookings/BookingsContainer";
import CarsContainer from "./Cars/CarsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import MainContainer from "./Main/MainContainer";
import {AuthTemp} from "./components/Temps/AuthTemp";
import {CarCreate} from "./Cars/CarCreate";

function App() {
    const [isSignShow, setIsSignShow] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuthorized);
    const user = useSelector(state => state.auth);
    let history = useHistory();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(authMe());
    }, [])

    return (
        <>
            <Header showSignHandler={setIsSignShow}/>
            {isSignShow && !isAuth ? <Sign showSignHandler={setIsSignShow}/> : null}
            {
                isAuth
                ?
                <Switch>
                    <Route path="/bookings">
                        <BookingsContainer />
                    </Route>
                    <Route exact path="/cars">
                        <CarsContainer />
                    </Route>
                    <Route path="/car/create">
                        <CarCreate/>
                    </Route>
                    <Route exact path="/messages">
                        <MessagesContainer />
                    </Route>
                    <Route exact path="/">
                        <MainContainer />
                    </Route>
                </Switch>
                :
                <Switch>
                    <Route path="/faq">
                        <Faq/>
                    </Route>
                    <Route exact path="/success-register">
                        <RegSuccess />
                    </Route>
                    <Route path="/register">
                        <RegisterContainer />
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <MainContainer />
                    </Route>
                </Switch>
            }
        </>
    )
}
export default App;
