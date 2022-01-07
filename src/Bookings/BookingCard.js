import star from "../img/star.png";
import calendarIcon from "../img/calendarIcon.png";
import {toPriceView} from "../utils/toPriceView";
import React from "react";


export const BookingCard = ({mark, model, year, price, begin, end}) => {
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
