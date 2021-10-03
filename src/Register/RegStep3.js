import React from "react"
import {useHistory} from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";

import Loader from "react-loader-spinner";
import back from "../img/back.svg";
import {useDispatch, useSelector} from "react-redux";
import {addUserDoc} from "../redux/action/user";
import {signUp} from "../redux/action/auth";


export const RegStep3 = () => {
    const user = useSelector(state => state.user)
    const docs = user.docs
    const isLoading = useSelector(state => state.system.loading)

    const dispatch = useDispatch();
    const history = useHistory()

    const nextHandler = () => {
        dispatch(signUp(user))
        // some checking
        // history.push('/register/3')
    }

    const backHandler = () => {
        // some checking
        history.push('/register/2')
    }


    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={backHandler}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 3 из 3</div>
                <h1 className="register__header__title">Загрузите документы</h1>
            </div>

            <form className="register__form">
                <h2 className="register__title">Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон.</h2>
                <label className="register__blockInput">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {docs.map((i, index) => {
                            return (
                                <div key={index} style={{
                                    display: "block",
                                    width: '100%'
                                }}>
                                    <img src={i}/>
                                </div>)
                        })}
                    </div>
                    <input type="file" value="" className="register__photo-container"
                           onChange={(e) => {
                               const binaryData = [];
                               binaryData.push(e.target.files[0]);
                               dispatch(addUserDoc(URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))));
                           }}
                    />
                </label>
            </form>
            <div className="register__footer">
                <button onClick={nextHandler}>
                    {isLoading
                        ? <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                        />

                    : <span>Зарегистрироваться</span>}
                </button>
            </div>
        </main>
    )
}

