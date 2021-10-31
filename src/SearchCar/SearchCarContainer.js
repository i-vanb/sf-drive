import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Footer from "../components/Footer";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import {SearchCar} from "./SearchCar";
import {carList} from "./dumpCarsData";
import {CarItem} from "./CarItem";
import {CarDetail} from "./CarDetail";
import {useQuery} from "@apollo/client";
import {FETCH_All_CARS_QUERY, FETCH_CARS_BY_CITY_QUERY} from "../utils/graphql-request";


const SearchCarContainer = () => {
    const [state, setState] = useState({
        city: "",
        dateBegin: "",
        dateFinish: "",
        type: "",
        startDate: null,
        endDate: null,
        detail: false,
        carItem: {}
    })


    useEffect(()=>{
    }, [])

    const filterHandler = params => {
        setState({...state, ...params})
    }

    const backFromDetailHandler = () => {
        setState({...state, carItem: {}, detail: false})
    }

    const onDetailHandler = car => {
        setState({...state, detail: true, carItem: car})
    }

    if(state.detail) {
        return <CarDetail {...state.carItem} onBack={backFromDetailHandler}/>
    }
    return(
        <>
            <SearchCar onSearch={filterHandler}/>
            <CarsList city={state.city} onDetail={onDetailHandler}/>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(SearchCarContainer)


export const CarsList = ({city, onDetail}) => {
    const {loading, data} = useQuery(FETCH_CARS_BY_CITY_QUERY, {
        variables: {city}
    })
    // return <div>kkkk</div>
    // if(data) {
    //     console.log('data', Object.values(data))
    //     Object.values(data).map(i => console.log(i))
    // }

    return(
        <div className="cars">
            {/*{carList.map(car => <a key={car.id} onClick={()=>onDetail(car)}><CarItem {...car} /></a>)}*/}
            {!loading && Object.values(data)[0].map((car, index) => <a key={index} onClick={()=>onDetail(car)}><CarItem {...car} /></a>)}
        </div>
    )
}


