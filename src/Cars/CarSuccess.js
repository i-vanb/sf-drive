import React from "react";
import reg_success from "../img/reg_success.svg";
import "react-datepicker/dist/react-datepicker.css";

import {useHistory} from "react-router-dom"

export const CarSuccess = (props) => {
    return (
        <main className="register">
            <section className="about">
                <div className="content-container">
                    <img src={reg_success} alt="" />
                    <h1>Успех</h1>
                    <p className="about__text">Вы успешно зарегистрировались. Дождитесь проверки
                        документов и начните пользоваться сервисом.</p>
                </div>
                <div className="register__success">
                    <button onClick={props.goToMain}>Перейти на главную
                    </button>
                </div>
            </section>
        </main>
    )
}

