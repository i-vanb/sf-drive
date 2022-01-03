import {withNoAuth} from "../src/withAuth/withAuth";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../src/redux/action/auth";
import React, {useEffect, useState} from "react";
import penIcon from '../src/img/pen.png'
import Image from 'next/image'
import closeIcon from "../src/img/close-icon.png";


const Profile = () => {
    const user = useSelector(state => state.auth)
    const profile = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [isChangeName, setIsChangeName] = useState(false)
    const [isChangePhone, setIsChangePhone] = useState(false)
    const [isChangeMail, setIsChangeMail] = useState(false)
    const [isChangeDate, setIsChangeDate] = useState(false)
    const [isChangePsw, setIsChangePsw] = useState(false)
    const [isChangeGender, setIsChangeGender] = useState(false)

    useEffect(()=>{
        // if(!user.isAuthorized) {}
    }, [user])

    const signOut = () => dispatch(logout())

    console.log(profile)

    if(!user.isAuthorized || !profile.mail || !profile.name) return null

    return (
        <section>
            <div className="content-container">
                <div className="profile__avatar">
                        <img src={`data:${profile.avatar[0].mimetype};base64,${Buffer.from(profile.avatar[0].buffer).toString('base64')}`}/>
                </div>
                <div className="profile__label">
                    {profile.name}<span className="edit-icon" onClick={()=>setIsChangeName(true)}><Image src={penIcon}/></span>
                    {isChangeName &&
                        <div className="modal">
                            <EditName name={profile.name}
                                      onClose={()=>setIsChangeName(false)}
                                      onSave={(props)=>console.log('save', props)}/>
                        </div>}
                </div>
                <div className="profile__exit" onClick={signOut}>
                    Выйти из профиля
                </div>
                <div className="profile__info">
                    <div className="profile__info__row">
                        <div className="profile__info__item">Дата рождения</div>
                        <div className="profile__info__item">
                            <span>{profile.birth_date || "не заполнено"}</span>
                            <span className="edit-icon" onClick={()=>setIsChangeDate(true)}><Image src={penIcon} width="14px" height="14px"/></span>
                        </div>
                        {isChangeDate &&
                        <div className="modal">
                            <EditDate name={profile.birth_date}
                                      onClose={()=>setIsChangeDate(false)}
                                      onSave={(props)=>console.log('save', props)}/>
                        </div>}
                    </div>
                    <div className="profile__info__row">
                        <div className="profile__info__item">Пол</div>
                        <div className="profile__info__item">
                            <span>{profile.gender || "не заполнено"}</span>
                            <span className="edit-icon"><Image src={penIcon} width="14px" height="14px"/></span>
                        </div>
                    </div>
                    <div className="profile__info__row">
                        <div className="profile__info__item">Телефон</div>
                        <div className="profile__info__item">
                            <span>{profile.phone || "не заполнено"}</span>
                            <span className="edit-icon"><Image src={penIcon} width="14px" height="14px"/></span>
                        </div>
                    </div>
                    <div className="profile__info__row">
                        <div className="profile__info__item">Эл.почта</div>
                        <div className="profile__info__item">
                            <span>{profile.email || "не заполнено"}</span>
                            <span className="edit-icon"><Image src={penIcon} width="14px" height="14px"/></span>
                        </div>
                    </div>
                    <div className="profile__info__row">
                        <div className="profile__info__item">Пароль</div>
                        <div className="profile__info__item">
                            <span className="btn-change-psw">Изменить</span>
                        </div>
                    </div>
                </div>
                <div className="profile__label">
                    Отзывы о Вас
                </div>
            </div>
        </section>
    )
}

export default () => withNoAuth(Profile)


const EditName = ({name, onSave, onClose}) => {
    const [inputName, setInputName] = useState(name)

    const onSaveHandler = () => onSave(name)

    return(
        <div className="profile__info__modal">
            <button className="close-icon btn-opacity" style={{top: 0}} onClick={onClose}>
                <Image src={closeIcon} />
            </button>
            <div className="profile__info__modal__row">
                <span className="profile__info__label">Изменить имя</span>
            </div>
            <div className="profile__info__modal__row">
                <div>
                    <input type="text" className="profile__info__modal__input"
                           value={inputName} onChange={e=>setInputName(e.target.value)}/>
                </div>
                <div>
                    <button className="profile__info__modal__button" onClick={onSaveHandler}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}


const EditDate = ({date, onSave, onClose}) => {
    const [inputDate, setInputDate] = useState(date)

    const onSaveHandler = () => onSave(date)

    return(
        <div className="profile__info__modal">
            <button className="close-icon btn-opacity" style={{top: 0}} onClick={onClose}>
                <Image src={closeIcon} />
            </button>
            <div className="profile__info__modal__row">
                <span className="profile__info__label">Изменить дату</span>
            </div>
            <div className="profile__info__modal__row">
                <div>
                    <input type="text" className="profile__info__modal__input"
                           value={inputDate} onChange={e=>setInputDate(e.target.value)}/>
                </div>
                <div>
                    <button className="profile__info__modal__button" onClick={onSaveHandler}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}
