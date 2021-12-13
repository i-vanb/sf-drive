import React from "react";
import rent_success from "../img/rent_success.svg";
import "react-datepicker/dist/react-datepicker.css";

import {useHistory} from "react-router-dom"

export const CarRentSuccess = (props) => {

    return (
        <main className="register">
            <section className="about">
                <div className="content-container">
                    <img src={rent_success} alt="" />
                    <h1>Успех</h1>
                    <p className="about__text">Вы успешно забронировали автомобиль.
                        Дождитесь подтверждения бронирования от владельца.</p>
                </div>
                <div className="register__success">
                    <button onClick={props.goToMain}>Перейти на главную
                    </button>
                </div>
            </section>
        </main>
    )
}

