import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, setCarPhoto} from "../../../src/redux/action/car";
import cloud from "../../../src/img/cloud.svg";
import back from "../../../src/img/back.svg";
import {withNoAuth} from "../../../src/withAuth/withAuth";
import {useRouter} from "next/router";
import Image from 'next/image'


const CarCrete = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useRouter()
    const car = useSelector(state => state.car)

    const onFileLoadHandler = e => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        console.dir(formData.get("file"))
        dispatch(setCarPhoto(formData))
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
                    <Image src={back}/>
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
                        <Image src={cloud} />
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

export default ()=>withNoAuth(CarCrete)
