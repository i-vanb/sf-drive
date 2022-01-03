import React from "react";
// import './style.css'
import img1 from '../../img/team/1.png'


export const Review = () => {
    return(
        <div className="review__container">
            <div className="review__header">
                <div className="review__header__icon">
                    <img src={img1} />
                </div>
                <div className="review__header__title">
                    <div className="review__header__name">Фамилия</div>
                    <div className="review__header__date">Март 2020</div>
                </div>
            </div>
            <div className="review__content">
                Отличный автомобиль за эти деньги. Динамики  для города достаточно, расход также небольшой, не зря
                Солярис берут таксисты. Владелец общительный,
                показал и рассказал все об автомобиле. Договорились, что передадим ему машину в другом районе города! Рекомендую!
            </div>
        </div>
    )
}
