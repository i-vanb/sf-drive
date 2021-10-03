import React, {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {CarCreteStep1} from "./CarCreteStep1";
import {CarCreteStep2} from "./CarCreteStep2";
import {CarCreteStep3} from "./CarCreteStep3";
import {CarCreteStep4} from "./CarCreteStep4";
import {useDispatch, useSelector} from "react-redux";
import {resetCar} from "../redux/action/car";

export const CarCreate = () => {
    const carID = useSelector(state => state.car.id)
    const ownerId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(resetCar(ownerId))
    }, [carID])
    return(
        <div className="content-container">
            <Switch>
                <Route exact path="/car/create">
                    <Redirect to="/car/create/1"/>
                </Route>
                <Route path="/car/create/1">
                    <CarCreteStep1

                    />
                </Route>
                <Route path="/car/create/2">
                    <CarCreteStep2

                    />
                </Route>
                <Route path="/car/create/3">
                    <CarCreteStep3

                    />
                </Route>
                <Route path="/car/create/4">
                    <CarCreteStep4

                    />
                </Route>

            </Switch>
        </div>
    )
}
