import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";

import Loader from "react-loader-spinner";
import back from "../img/back.svg";


export const RegStep3 = props => {
    const [docs, setDocs] = useState(props.initialState.docs || [])

    const [isLoading, setIsLoading] = useState(false)
    const [servererror, setServerError] = useState(false)

    const fetchHandler = () => {
        setIsLoading(true);
        props.confirmUserDocs(docs);
        props.register();

        // after success
        // setIsLoading(false);
        // props.stepForward();
    }



    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={props.stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 3 из 3</div>
                <h1 className="register__header__title">Загрузите документы</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон.</h2>


                <label className="register__blockInput">
                    <input type="file" value="" className="register__photo-container"
                           // onChange={(e) => setName(e.target.value)}
                    />
                </label>



            </form>
            <div className="register__footer">
                <button onClick={fetchHandler}>
                    {isLoading
                        ? <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                        />
                        : <span>Зарегистрироваться</span>
                    }
                </button>
            </div>
            {props.error &&
                <div className="server-error">
                    <span>props.error</span>
                </div>}
        </main>
    )
}

