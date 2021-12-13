import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, setCarPhoto} from "../redux/action/car";
import cloud from "../img/cloud.svg";
import {useHistory} from "react-router-dom";
import back from "../img/back.svg";


export const CarCreteStep3 = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()
    const car = useSelector(state => state.car)

    const onFileLoadHandler = e => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        console.dir(formData.get("file"))

        // const binaryData = [];
        // binaryData.push(e.target.files[0]);
        dispatch(setCarPhoto(formData))

        // window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
        // setPhotoUrl(URL.createObjectURL(new Blob(binaryData, {type: "application/zip"})));
        // setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    }

    const updateCarHandler = update => {
        dispatch(setCar(update))
    }

    const stepBack = () => {
        history.push("/car/create/2")
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 3 из 4</div>
                <h1 className="register__header__title">Фото автомобиля</h1>
            </div>
            <form className="register__form">
                <p className="text-desc">Чем больше качественных фотографий вы загрузите,
                    тем выше шанс того, что выберут ваш автомобиль.</p>
                <div className="form-section-wrapper">
                    <div className="file-loader-container">
                        <input className="file-loader__input" type="file" onChange={onFileLoadHandler}/>
                        <img src={cloud} />
                        <div className="file-loader__title">Перетащите или <span style={{color: "#61A199"}}>выберите файл</span></div>
                    </div>
                </div>
            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={() => history.push("/car/create/4")}
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
