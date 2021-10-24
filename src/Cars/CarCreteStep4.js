import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {createCar, setCar, setCreated} from "../redux/action/car";
import cloud from "../img/cloud.svg";
import {useHistory} from "react-router-dom";
import back from "../img/back.svg";
import {CarSuccess} from "./CarSuccess";


export const CarCreteStep4 = () => {
    const [isLoading, setIsLoading] = useState(false)
    const car = useSelector(state => state.car)
    const {isCreated} = car

    const dispatch = useDispatch()
    const history = useHistory()

    const setIsCreated = (is) => dispatch(setCreated(is))

    const updateCarHandler = update => {
        dispatch(setCar(update))
    }

    const createCarHandler = () => dispatch(createCar(car))

    const stepBack = () => {
        history.push("/car/create/3")
    }

    const goToMain = () => {
        setIsCreated(false)
        history.push("/")
    }

    if(isCreated) return <CarSuccess goToMain={goToMain} />

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 4 из 4</div>
                <h1 className="register__header__title">Фото документов</h1>
            </div>
            <form className="register__form">
                <p className="text-desc">СТС или ПТС автомобиля, полис ОСАГО,
                    полис КАСКО (если есть)</p>
                <div className="form-section-wrapper">
                    <div className="file-loader-container">
                        <input className="file-loader__input" type="file"/>
                        <img src={cloud} />
                        <div className="file-loader__title">Перетащите или <span style={{color: "#61A199"}}>выберите файл</span></div>

                    </div>
                </div>
            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={createCarHandler}
                    // disabled={
                    //     birthDate === ''
                    //     || datePassport === ''
                    //     || dateLicence === ''
                    //     || name === ''
                    //     || mail === ''
                    //     || phone === ''
                    //     || numPassport === ''
                    //     || orgPassport === ''
                    //     || codePassport === ''
                    //     || numLicence === ''
                    //     || password === ''
                    //     || repeatPassword === ''
                    // }
                >
                    {isLoading
                        ?
                        <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                            // timeout={3000} //3 secs
                        />
                        : <span>Продолжить</span>

                    }
                </button>
            </div>
            {/*{servererror &&*/}
            {/*<div className="server-error">*/}
            {/*    <span>Не удалось продолжить регистрацию. Попробуйте ещё раз</span>*/}
            {/*</div>}*/}
        </main>
    )
}
