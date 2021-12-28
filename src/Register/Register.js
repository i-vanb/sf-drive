import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import eyeHiddenIcon from "../img/eye-icon.svg"
import eyeIcon from "../img/eye-open-icon.svg"

import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../redux/action/user";
import {useHistory} from "react-router-dom";


export const Register = () => {
    const state = useSelector(state => state.user)
    const {birth_date, passport_date, licence_date, name, mail, phone, passport_number, passport_vendor,
        passport_code, licence_number, password, repeatPassword} = state

    const dispatch = useDispatch();
    const history = useHistory()

    const nextHandler = () => {
        // some checking
        history.push('/register/2')
    }

    const [isHiddenPsw, setIsHiddenPsw] = useState(true)
    const [isHiddenRePsw, setIsHiddenRePsw] = useState(true)
    const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)

    const checkPasswordRepeat = () => {
        setIsHiddenRePsw(true)
        if (password !== repeatPassword) {
            setIsRepeatPasswordError(true)
        }
    }

    const checkPassword = () => {
        setIsHiddenPsw(true)
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">Шаг 1 из 3</div>
                <h1 className="register__header__title">Расскажите о себе</h1>
            </div>
            <div className="register__form">
                <h2 className="register__title">Информация о вас</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">ФИО</span>
                    <Input name='name' placeholder="ФИО полностью"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата рождения</span>
                    <DatePicker className="datePicker" selected={birth_date} onChange={date => dispatch(setUserData({birth_date: date}))}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Электронная почта</span>
                    <Input name='mail' placeholder="mail@example.com"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Телефон</span>
                    <input type="text" value={phone} placeholder="+7 900 000-00-00"
                           onChange={(e) => dispatch(setUserData({phone: e.target.value}))}
                    />
                </label>
                <h2 className="register__title">Паспорт</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Серия и номер</span>
                    <Input name='passport_number' placeholder="0000 000000"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата выдачи</span>
                    <DatePicker className="datePicker" selected={passport_date}
                                onChange={date => dispatch(setUserData({passport_date: date}))}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Кем выдан</span>
                    <Input name='passport_vendor' placeholder="Название органа выдавшего паспорт"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Код подразделения</span>
                    <Input name='passport_code' placeholder="000-000"/>
                </label>
                <h2 className="register__title">Водительское удостоверение</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Серия и номер</span>
                    <Input name='licence_number' placeholder="0000 000000"/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата выдачи</span>
                    <DatePicker className="datePicker" selected={licence_date} onChange={date => dispatch(setUserData({licence_date: date}))}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                </label>
                <h2 className="register__title">Пароль</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Придумайте пароль</span>
                    <input type={isHiddenPsw ? "password" : "text"} value={password} className="w100 password"
                           onChange={(e) => dispatch(setUserData({password: e.target.value}))}
                           onMouseOut={checkPassword}
                    />
                    <img src={isHiddenPsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenPsw(!isHiddenPsw)}/>
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Повторите пароль</span>

                    <input type={isHiddenRePsw ? "password" : "text"} value={repeatPassword}
                           className={isRepeatPasswordError ? "w100 password isError" : "w100 password"}
                           onChange={(e) => dispatch(setUserData({repeatPassword: e.target.value}))}
                           onMouseOut={checkPasswordRepeat} onMouseEnter={() => setIsRepeatPasswordError(false)}
                    />
                    <img src={isHiddenRePsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenRePsw(!isHiddenRePsw)}/>
                    {isRepeatPasswordError &&
                    <span className="error">пароль не совпадает</span>
                    }
                </label>

            </div>
            <div className="register__footer  lineTop">
                <button
                    onClick={nextHandler}
                    disabled={
                        birth_date === ''
                        || passport_date === ''
                        || licence_date === ''
                        || name === ''
                        || mail === ''
                        || phone === ''
                        || passport_number === ''
                        || passport_vendor === ''
                        || passport_code === ''
                        || licence_number === ''
                        || password === ''
                        || repeatPassword === ''
                    }
                >
                    <span>Продолжить</span>
                </button>
            </div>
        </main>
    )
}

const Input = ({name, placeholder, className}) => {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onchangeHandler = e => dispatch(setUserData({[name]: e.target.value}))
    return(
        <input placeholder={placeholder} onChange={onchangeHandler} value={state[name]} className={className || 'w100'}/>
    )
}
