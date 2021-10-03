import React from "react"
import "react-datepicker/dist/react-datepicker.css";
import back from "../img/back.svg"

import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {setUserData} from "../redux/action/user";


export const RegStep2 = () => {
    const photo = useSelector(state => state.user.photo)

    console.log(photo)
    const dispatch = useDispatch();
    const history = useHistory()

    const nextHandler = () => {
        // some checking
        history.push('/register/3')
    }

    const backHandler = () => {
        // some checking
        history.push('/register/1')
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={backHandler}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 2 из 3</div>
                <h1 className="register__header__title">Загрузите селфи</h1>
            </div>
            <form className="register__form photo_input">
                <h2 className="register__title">Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h2>
                <label className="">
                        <input type="file" className=""
                           onChange={(e) => {
                               const binaryData = [];
                               binaryData.push(e.target.files[0]);
                               dispatch(setUserData({photo: URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))}));
                           }}
                    />
                </label>
                <div className="imageWrapper">
                    <img src={photo}/>
                </div>
            </form>
            <div className="register__footer">
                <button onClick={nextHandler}>
                    <span>Продолжить</span>
                </button>
            </div>
        </main>
    )
}

