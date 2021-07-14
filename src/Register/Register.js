import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import eyeHiddenIcon from "../img/eye-icon.svg"
import eyeIcon from "../img/eye-open-icon.svg"


import Loader from "react-loader-spinner";
import {useDispatch} from "react-redux";


export const Register = props => {

    const [birthDate, setBirthDate] = useState(props.initialState.birthDate || '');
    const [datePassport, setDatePassport] = useState(props.initialState.datePassport || '');
    const [dateLicence, setDateLicence] = useState(props.initialState.dateLicence || '')
    const [name, setName] = useState(props.initialState.name || '');
    const [mail, setMail] = useState(props.initialState.mail || '');
    const [phone, setPhone] = useState(props.initialState.phone || '');
    const [numPassport, setNumPassport] = useState(props.initialState.numPassport || '');
    const [orgPassport, setOrgPassport] = useState(props.initialState.orgPassport || '');
    const [codePassport, setCodePassport] = useState(props.initialState.codePassport || '');
    const [numLicence, setNumLicence] = useState(props.initialState.birthDate || '');
    const [password, setPassword] = useState(props.initialState.password || '');
    const [repeatPassword, setRepeatPassword] = useState(props.initialState.repeatPassword || '')
    const [isHiddenPsw, setIsHiddenPsw] = useState(true)
    const [isHiddenRePsw, setIsHiddenRePsw] = useState(true)
    const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)
    const [error, setError] = useState({
        name: '', mail: '', phone: '', birthDate: '', datePassport: '', dateLicence: '',
        numLicence: '', numPassport: '', orgPassport: '', codePassport: '', password: '',
        repeatPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [servererror, setServerError] = useState(false)

    const dispatch = useDispatch();

    const checkPasswordRepeat = () => {
        setIsHiddenRePsw(true)
        if (password !== repeatPassword) {
            setIsRepeatPasswordError(true)
        }
    }

    const checkPassword = () => {
        setIsHiddenPsw(true)
    }

    const fetchHandler = () => {
        setIsLoading(true);

        const userData = {
            name, mail, phone,
            birth_date: birthDate,
            passport_number: numPassport,
            passport_date: datePassport,
            passport_vendor: orgPassport,
            passport_code: codePassport,
            licence_number: numLicence,
            licence_date: dateLicence,
            password
        }
        props.confirmUserData(userData);

        setIsLoading(false);
        props.stepForward();
    }

    async function applyInfo() {
        const response = await fetch('http://localhost:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, mail, phone,
                birth_date: birthDate,
                passport_number: numPassport,
                passport_date: datePassport,
                passport_vendor: orgPassport,
                passport_code: codePassport,
                licence_number: numLicence,
                licence_date: dateLicence,
                password
            })
        })
        return response
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">Шаг 1 из 3</div>
                <h1 className="register__header__title">Расскажите о себе</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Информация о вас</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">ФИО</span>
                    <input type="text" value={name} className="w100" placeholder="ФИО полностью"
                           onChange={(e) => setName(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата рождения</span>
                    <DatePicker className="datePicker" selected={birthDate} onChange={date => setBirthDate(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                    {/*<input type="text" value={date}*/}
                    {/*       onChange={(e) => setDate(e.target.value)}/>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Электронная почта</span>
                    <input type="email" value={mail} className="w100" placeholder="mail@example.com"
                           onChange={(e) => setMail(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Телефон</span>
                    <input type="number" value={phone} placeholder="+7 900 000-00-00"
                           onChange={(e) => setPhone(e.target.value)}
                    />
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <h2 className="register__title">Паспорт</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Серия и номер</span>
                    <input type="number" value={numPassport} placeholder="0000 000000"
                           onChange={(e) => setNumPassport(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата выдачи</span>
                    {/*<input type="text" value={datePassport}*/}
                    {/*       onChange={(e) => setDatePassport(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={datePassport}
                                onChange={date => setDatePassport(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Кем выдан</span>
                    <input type="text" value={orgPassport} className="w100"
                           placeholder="Название органа выдавшего паспорт"
                           onChange={(e) => setOrgPassport(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Код подразделения</span>
                    <input type="text" value={codePassport} placeholder="000-000"
                           onChange={(e) => setCodePassport(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <h2 className="register__title">Водительское удостоверение</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Серия и номер</span>
                    <input type="number" value={numLicence} placeholder="0000 000000"
                           onChange={(e) => setNumLicence(e.target.value)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Дата выдачи</span>
                    {/*<input type="text" value={dateLicence} placeholder="00.00.0000"*/}
                    {/*       onChange={(e) => setDateLicence(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={dateLicence} onChange={date => setDateLicence(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <h2 className="register__title">Пароль</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Придумайте пароль</span>
                    <input type={isHiddenPsw ? "password" : "text"} value={password} className="w100 password"
                           onChange={(e) => setPassword(e.target.value)}
                           onMouseOut={checkPassword}
                    />
                    <img src={isHiddenPsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenPsw(!isHiddenPsw)}/>
                    {/*<span className="error">пароль не совпадает</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">Повторите пароль</span>

                    <input type={isHiddenRePsw ? "password" : "text"} value={repeatPassword}
                           className={isRepeatPasswordError ? "w100 password isError" : "w100 password"}
                           onChange={(e) => setRepeatPassword(e.target.value)}
                           onMouseOut={checkPasswordRepeat} onMouseEnter={() => setIsRepeatPasswordError(false)}
                    />
                    <img src={isHiddenRePsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenRePsw(!isHiddenRePsw)}/>
                    {isRepeatPasswordError &&
                    <span className="error">пароль не совпадает</span>
                    }
                </label>

            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={fetchHandler}
                    disabled={
                        birthDate === ''
                        || datePassport === ''
                        || dateLicence === ''
                        || name === ''
                        || mail === ''
                        || phone === ''
                        || numPassport === ''
                        || orgPassport === ''
                        || codePassport === ''
                        || numLicence === ''
                        || password === ''
                        || repeatPassword === ''
                    }
                >
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
            {servererror &&
            <div className="server-error">
                <span>Не удалось продолжить регистрацию. Попробуйте ещё раз</span>
            </div>}
        </main>
    )
}

