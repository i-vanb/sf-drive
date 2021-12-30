import React from "react";
import error_cross from "../img/error-cross.png";
import "react-datepicker/dist/react-datepicker.css";

import {useHistory} from "react-router-dom"

export const CarRentError = (props) => {

    return (
        <main className="register">
            <section className="about">
                <div className="content-container">
                    {/*<img src={error_cross} alt="" />*/}
                    <span style={{fontSize: '30px', color: "red", fontWeight: "bolder"}}>x</span>
                    <h1>Ошибка</h1>
                    <p className="about__text">{props.message}</p>
                </div>
                <div className="register__success">
                    <button onClick={props.goToMain}>Перейти на главную
                    </button>
                </div>
            </section>
        </main>
    )
}

