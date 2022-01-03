import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Image from 'next/image'
import {getAllBooking} from "../src/redux/action/booking";
import {toPriceView} from "../src/utils/toPriceView";
import star from "../src/img/star.png";
import calendarIcon from "../src/img/calendarIcon.png";
import {withAuth, withNoAuth} from "../src/withAuth/withAuth";


const Bookings = props => {
    const {auth, user, bookings, getAllBooking} = props

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

export default ()=>withNoAuth(connect(mapStateToProps, {getAllBooking})(Bookings))


const BookingCard = ({mark, model, year, price, begin, end}) => {
    return(
        <div className="user-cars__item">
            <div className="user-cars__item__photo">
                <img src="/cars/img/imgCar1.png"/>
            </div>
            <div className="user-cars__item__desc">
                <div className="collage_car__main__reviews" style={{marginBottom: "10px"}}>
                    <Image src={star} width="29px"/>
                    <span>4,5</span>
                    <span>(4)</span>
                </div>
                <div><Image src={calendarIcon} /></div>
                <div>{mark} {model}, {year}</div>
                <div>{toPriceView(price)} руб</div>
            </div>
        </div>
    )
}
