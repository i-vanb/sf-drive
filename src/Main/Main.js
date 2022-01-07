import React, {useState} from "react";
import "../styles/Main.css";
import main_car_mob from "../img/main-car-mob.svg";
import main_2 from "../img/main_2.svg";
import main_3 from "../img/main_3.svg";
import main_4 from "../img/main_4.svg";
import birka from "../img/birka.svg";
import dollar from "../img/dollar.svg";
import percent from "../img/percent.svg";
import money from "../img/money.svg";
import toy_car from "../img/toy_car.svg";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";


function MainUnAuth() {
    return (
        <>
            <section className="main">
                <div className="content-container">
                    <img className="main_img_mob" src={main_car_mob} alt="main picture" />
                    <h1>Каршеринг в любой</h1>
                    <h1>точке России</h1>
                    <br/>
                    <p className="main__text">
                        Будьте всегда за рулём во время путешествий
                    </p>
                    <p className="main__text">
                        и командировок.
                    </p>
                    <div className="register__main__header">
                        <NavLink to="/register/1">
                            Зарегистрироваться
                        </NavLink>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container row">
                    <div>
                        <img src={main_2} alt="main picture" />
                    </div>
                    <div className="desc">
                        <h2>Аренда напрямую
                            от владельцев</h2>
                        <p>
                            Вы получите автомобиль от его собственника,
                            а мы проверим юридическую чистоту и техническую исправность.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container row">
                    <div className="desc">
                        <h2>Автомобили
                            на любой вкус
                        </h2>
                        <p>
                            Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до
                            премиум-класса и спорткаров.
                        </p>
                    </div>
                    <div>
                        <img src={main_3} alt="main picture" />
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container row">
                    <div>
                        <img src={main_4} alt="main picture" />
                    </div>
                    <div className="desc">
                        <h2>Гарантия честной аренды
                        </h2>
                        <p>
                            Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gray">
                <div className="content-container">
                    <h2>Как арендовать автомобиль</h2>
                    <div className="circle_li__wrap">
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img">1</span>
                            <span className="circle_li__item_text">Выберите автомобиль</span>
                        </div>
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img">2</span>
                            <span className="circle_li__item_text">Забронируйте дату и время</span>
                        </div>
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img">3</span>
                            <span className="circle_li__item_text">Получите автомобиль</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <h2>У вас есть автомобиль?</h2>
                    <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
                    <div className="circle_li__wrap">
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img"><img src={birka}/></span>
                            <span className="circle_li__item_text">Вы сами указываете цену</span>
                        </div>
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img"><img src={dollar}/></span>
                            <span className="circle_li__item_text">Мы страхуем автомобили</span>
                        </div>
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img"><img src={percent}/></span>
                            <span className="circle_li__item_text">Наша комиссия всего 3%</span>
                        </div>
                        <div className="circle_li__item_container">
                            <span className="circle_li__item_img"><img src={money}/></span>
                            <span className="circle_li__item_text">Выплаты каждую неделю</span>
                        </div>
                        {/*<div className="dashed-border-div"></div>*/}
                    </div>
                </div>
            </section>
            <section className="bg-gray">
                <div className="content-container">
                    <h2>Отзывы клиентов</h2>
                </div>
                <p style={{display: "block", textAlign: "center"}}>Пока что нет ни одного отзыва</p>
            </section>
            <section>
                <div className="content-container">
                    <img src={toy_car}/>
                    <h2>Попробуйте аренду на себе</h2>
                    <NavLink to="/register/1" className="register__main__below">
                        Зарегистрироваться
                    </NavLink>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MainUnAuth;
