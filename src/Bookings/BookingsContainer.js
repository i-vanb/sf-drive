import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import camera from '../utils/camera';
import {CameraFeed} from "../components/cameraFeed";
import {setUserPhoto} from "../redux/action/user";
import {blobToBase64} from "../utils/blobToString";
import {getAllBooking} from "../redux/action/booking";
import {toPriceView} from "../utils/toPriceView";
import star from "../img/star.png";
import calendarIcon from "../img/calendarIcon.png";
import {useQuery} from "@apollo/client";
import {FETCH_All_BOOKING_QUERY, FETCH_CARS_BY_CITY_QUERY} from "../utils/graphql-request";


const BookingsContainer = props => {
    const {auth, user, bookings, getAllBooking} = props

    const {loading, data} = useQuery(FETCH_All_BOOKING_QUERY, {
        variables: {id: auth.userID}
    })

    useEffect(()=>{
        getAllBooking(auth.userID)
    }, [])

    return (
        <div className="car">
            <div className="content-container">
                <h2>
                    Мои бронирования
                </h2>

                {bookings.filter(i => !i.isArchived).length?<h4>Актуальные</h4>:null}
                {bookings.map(i => {
                    if(!i.isArchived) {
                        return (
                            <BookingCard key={i.id} mark={i.mark} model={i.model} year={i.year} price={i.totalPrice}
                                         begin={i.begin} end={i.end}/>
                        )
                    }
                })}

                {bookings.filter(i => i.isArchived).length ? <h4>В архиве</h4>:null}
                {bookings.map(i => {
                    if(i.isArchived) {
                        return (
                            <BookingCard key={i.id} mark={i.mark} model={i.model} year={i.year} price={i.totalPrice}
                                         begin={i.begin} end={i.end}/>
                        )
                    }
                })}

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
    bookings: state.booking.list
})

export default connect(mapStateToProps, {getAllBooking})(BookingsContainer)


const BookingCard = ({mark, model, year, price, begin, end}) => {
    return(
        <div className="user-cars__item">
            <div className="user-cars__item__photo">
                <img src="/cars/img/imgCar1.png"/>
            </div>
            <div className="user-cars__item__desc">
                <div className="collage_car__main__reviews" style={{marginBottom: "10px"}}>
                    <img src={star}/>
                    <span>4,5</span>
                    <span>(4)</span>
                </div>
                <div><img src={calendarIcon} /></div>
                <div>{mark} {model}, {year}</div>
                <div>{toPriceView(price)} руб</div>
            </div>
        </div>
    )
}
