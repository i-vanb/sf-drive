import React, {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"


export const SearchCar = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <section>
            <div className="content-container">
                <h1>Арендуйте автомобиль</h1>
                <form className="search_car__form">
                    <div className="form_content">
                        <input placeholder="" className="form_input"/>
                        <span>Местоположение</span>
                    </div>
                    <div className="form_content">
                        {/*<img src={calendarIcon} className="calendarIcon"/>*/}
                        {/*<input placeholder="" className="form_input"/>*/}
                        <DatePicker
                            // className="search_car__form__datePicker"
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                        />

                        <span>Период аренды</span>
                    </div>
                    <div className="form_content">
                        <input placeholder="" className="form_input last-input-circle"/>
                        <span>Категория</span>
                    </div>
                    <div className="submit">
                        <button className="submit__btn">Найти</button>
                    </div>
                </form>
            </div>
            <h2 className="search_title">Рекомендуем поблизости</h2>
        </section>
    )
}
