import React from 'react';


export const CarItem = props => {
    const {name, price, imgAvatar, imgCar} = props;

    return (
        <div className="car-item">
            <img className="bgCar" src={imgCar} />
            <div className="carAvatarWrapper">
                <img className="carUserAvatar" src={imgAvatar}/>
            </div>
            <div className="text">
                <span className="carName"><b>{name}</b></span>
                <span className="carPrice">{"от " + price + " ₽/сутки"}</span>
            </div>
        </div>
    )
}
