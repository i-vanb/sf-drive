import React, {useEffect} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import {Register} from "./Register";
import {RegStep2} from "./RegStep2";
import {RegStep3} from "./RegStep3";
import {useSelector} from "react-redux";


const  RegisterContainer = () => {
    const isAuthorized = useSelector(state => state.auth.isAuthorized)
    const history = useHistory()

    useEffect(()=>{
        isAuthorized && history.push('/success-register')
    }, [isAuthorized])

    return (
        <Switch>
            <Route path="/register/1">
                <Register/>
            </Route>
            <Route exact path="/register/2">
                <RegStep2/>
            </Route>
            <Route exact path="/register/3">
                <RegStep3/>
            </Route>
        </Switch>
    )
}

export default RegisterContainer
