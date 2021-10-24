import React, {useEffect, useState} from "react"
import sign_draw from "../img/sign_in_draw.svg"
import closeIcon from "../img/close-icon.png"

import {Link, useHistory} from "react-router-dom";
import {Recovery} from "./Recovery";
import {useDispatch, useSelector} from "react-redux";
import {login, setSignUpError} from "../redux/action/auth";
import Loader from "react-loader-spinner";


export const Sign = props => {
    const history = useHistory();
    const {showSignHandler} = props;
    const [mail, setMail] = useState('');
    const [psw, setPsw] = useState('');
    const [isPswForgotten, setIsPswForgotten] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const authError = useSelector(state => state.auth.error)

    useEffect(()=>{
        dispatch(setSignUpError(""))
    }, [psw, mail])

    const dispatch = useDispatch();

    const signHandler = e => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(login(mail, psw));
        setIsLoading(false);
    }

    const fetchHandler = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail, password: psw
            })
        })
        if (response.ok) {
            setIsLoading(false)
            const data = await response.json()
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)
            // localStorage.setItem("payload", JSON.stringify(data.payload))
            //history.push('/register/2') // в случае успеха
            history.push('/') // в случае успеха временно без страниц 2 и 3
        } else {
            setError(true)
            setIsLoading(false)
        }
    }




    if (isPswForgotten)
        return <Recovery
            closeHandler={showSignHandler}
            getBack={() => setIsPswForgotten(false)}
        />



    return (
        <div className="modal">
            <div className="sign__container">
                <button className="close-icon btn-opacity" onClick={() => showSignHandler(false)}>
                    <img src={closeIcon}/>
                </button>
                <img className="draw-image" src={sign_draw}/>
                <h2>Авторизация</h2>
                <form className="sign__form">
                    {authError &&
                    <div className="errorSign">Не верное имя пользователя или пароль</div>
                    }
                    <div className="input__wrapper">
                        <input type="email" value={mail} placeholder="Электронная почта"
                               className="sign__form__input"
                               onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div className="input__wrapper">
                        <input type="password" value={psw} placeholder="Пароль"
                               className="sign__form__input"
                               onChange={(e) => setPsw(e.target.value)}/>
                        <a onClick={() => setIsPswForgotten(true)}>Забыли?</a>
                    </div>

                    {isLoading
                        ? <Loader
                            style={{marginTop: "41px", marginBottom: "42px"}}
                            type="TailSpin"
                            color="#61A199"
                            height={30}
                            width={30}
                            // timeout={3000} //3 secs
                        />
                        : <button
                            className="sign__form__button"
                            onClick={signHandler}
                        >Войти
                        </button>

                    }

                </form>
                <div onClick={() => showSignHandler(false)}
                     className="reg-link">
                    <Link className="reg-link" to="/register/1">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

