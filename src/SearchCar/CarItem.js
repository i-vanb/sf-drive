import React from 'react';


export const CarItem = props => {
    const {name, price, imgAvatar, imgCar, mark, model, year} = props;
//    name: "BMW 3-series, 2019",
//         imgAvatar: "cars/img/ava1.png",
//         imgCar: "cars/img/imgCar1.png",
// console.log('car', props)
    return (
        <div className="car-item">
            <img className="bgCar" src="cars/img/imgCar1.png" />
            <div className="carAvatarWrapper">
                <img className="carUserAvatar" src="cars/img/imgCar1.png"/>
            </div>
            <div className="text">
                <span className="carName"><b>{mark} {model}, {year}</b></span>
                <span className="carPrice">{"от " + price + " ₽/сутки"}</span>
            </div>
        </div>
    )
}
