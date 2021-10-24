import React, {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import {getFilteredCars} from "../redux/action/cars";
import {useDispatch} from "react-redux";
import {useQuery} from "@apollo/client";
import {FETCH_CARS_BY_CITY_QUERY} from "../utils/graphql-request";
import {fetchData} from "../api";
import {getUserCars} from "../redux/action/user";
import {setCreated} from "../redux/action/car";
import axios from "axios";
import {resetLoading} from "../redux/action/system";


export const SearchCar = ({onSearch}) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [cityInput, setCityInput] = useState('')

    const filterHandler = e => {
        e.preventDefault()
        onSearch({city: cityInput})
        // setCityInput('')
    }

    return (
        <section>
            <div className="content-container">
                <h1>Арендуйте автомобиль</h1>
                <form className="search_car__form">
                    <div className="form_content">
                        <input placeholder="" className="form_input" value={cityInput}
                               onChange={e=>setCityInput(e.target.value)}/>
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
                        <button onClick={filterHandler} className="submit__btn">Найти</button>
                    </div>
                </form>
            </div>
            <h2 className="search_title">Рекомендуем поблизости</h2>
            {/*<TestFileInput />*/}
        </section>
    )
}


const TestFileInput = () => {
    const [fileInput, setFileInput] = useState('')
    const [photos, setPhotos] = useState([])
    console.log(photos)

    const fileUploadHandler = async () => {
        const formData = new FormData();
        formData.append(
            "file",
            fileInput, fileInput.name
        );

        const data = await axios.post('http://localhost:8000/file/create', formData)
        console.log(data)
            // .then((data)=>{
            //     console.log(data)
            // })
            // .catch(({response})=>{
            //     console.log(data)
            // })
    }

    const saveFileHandler = e => {
        const file = e.target.files[0]
        setFileInput(file)
    }

    const getAllFiles = async () => {
        const data = axios.get('http://localhost:8000/file/all')
            .then((data)=>{
              console.log(data)
                setPhotos(data.data)
            })
            .catch(({response})=>{
                console.log(data)
            })
    }

    return(
        <>
            <input type="file" onChange={saveFileHandler} />
            <button onClick={fileUploadHandler}>ЗАГРУЗИТЬ</button>
            <button onClick={getAllFiles}>Файлы</button>
            <div>{photos.map(i => <img key={i.id} src={`data:${i.mimetype};base64,${Buffer.from(i.buffer).toString('base64')}`}
                />)}</div>
        </>
    )
}


