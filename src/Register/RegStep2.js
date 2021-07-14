import React, {useState} from "react"
import "react-datepicker/dist/react-datepicker.css";
import back from "../img/back.svg"

import Loader from "react-loader-spinner";


export const RegStep2 = props => {
    const [photoUrl, setPhotoUrl] = useState(props.initialState || undefined);

    const [isLoading, setIsLoading] = useState(false);
    const [servererror, setServerError] = useState(false);


    const fetchHandler = () => {
        // setIsLoading(true);
        props.confirmUserPhoto(photoUrl);
        // setIsLoading(false);
        props.stepForward();
    }


    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={props.stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 2 из 3</div>
                <h1 className="register__header__title">Загрузите селфи</h1>
            </div>
            <form className="register__form photo_input">
                <h2 className="register__title">Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h2>


                <label className="">
                    {/*<div style={{ position: "relative", width: "fit-content", height: "fit-content", margin: "0 auto" }}>*/}
                        <input type="file" className=""
                           onChange={(e) => {
                               const binaryData = [];
                               binaryData.push(e.target.files[0]);
                               // window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
                               setPhotoUrl(URL.createObjectURL(new Blob(binaryData, {type: "application/zip"})));
                               // setPhotoUrl(URL.createObjectURL(e.target.files[0]));
                           }}
                    />

                    {/*</div>*/}
                </label>
                <div className="imageWrapper">
                    <img src={photoUrl}/>
                </div>



            </form>
            <div className="register__footer">
                <button onClick={fetchHandler}>
                    {isLoading
                        ? <Loader
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
            {false &&
                <div className="server-error">
                    <span>Не удалось продолжить регистрацию. Попробуйте ещё раз</span>
                </div>}
        </main>
    )
}

