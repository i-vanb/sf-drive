import React from 'react';
import back from "../img/back.svg";


export const CarDetail = props => {
console.log(props)
    return (
        <div className="">
            <div className="content-container">
                <div className="car_detail">
                    <div className="register__step-back" onClick={props.onBack}>
                        <img src={back}/>
                        <span>Назад</span>
                    </div>
                    <div className="collage_car">
                        <div className="collage_car__main">
                            <img src={props.imgCar}/>
                        </div>
                        <div className="collage_car__add"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
