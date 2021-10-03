import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import calendarIcon from "../img/calendar-icon.svg";
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, toggleCar} from "../redux/action/car";
import {NavLink, useHistory} from "react-router-dom";
import {CheckBoxSlider} from "../components/ui/checkBoxSlider/CheckBoxSlider";
import {CheckBoxInput} from "../components/ui/checkBoxInput/CheckBoxInput";
import losfix from "../img/losfix.svg";
import airbags from "../img/airbags.svg";
import heater from "../img/heater.svg";
import auxcable from "../img/auxcable.svg";
import bluetooth from "../img/bluetooth.svg";
import cruise from "../img/cruise.svg";
import conditioning from "../img/conditioning.svg";
import multimedia from "../img/multimedia.svg";
import navigation from "../img/navigation.svg";
import seats_ventilation from "../img/seats_ventilation.svg";
import seats_heat from "../img/seats_heat.svg";
import roof_rack from "../img/roof_rack.svg";
import parktronic from "../img/parktronic.svg";
import camera from "../img/camera.svg";
import back from "../img/back.svg";


export const CarCreteStep2 = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()
    const car = useSelector(state => state.car)
    const {isLosfix, isAirbags, isHeater, isAuxCable, isBluetooth, isCruise, isConditioning, isMultimedia, isNavigation,
        isSeatsVentilation, isSeatsHeat, isRoofRack, isParktronic, isCamera, isChildrenSeat, isCarDelivery, isFreePlace,
        isFuel, childrenSeatPrice, carDelivery, freePlace, fuel} = car

    const updateCarHandler = update => {
        dispatch(setCar(update))
    }

    const toggleCarHandler = name => dispatch(toggleCar(name))

    const stepBack = () => {
        history.push("/car/create/1")
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 2 из 4</div>
                <h1 className="register__header__title">Дополнительно</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Опции автомобиля</h2>
                <div className="form-section-wrapper">
                    <CheckBoxSlider icon={losfix} isActive={isLosfix} setIsActive={()=>toggleCarHandler(isLosfix)} label="Крепления Iosfix" />
                    <CheckBoxSlider icon={airbags} isActive={isAirbags} setIsActive={()=>toggleCarHandler(isAirbags)} label="Подушки безопасности" />
                    <CheckBoxSlider icon={heater} isActive={isHeater} setIsActive={()=>toggleCarHandler(isHeater)} label="Автономный подогреватель" />
                    <CheckBoxSlider icon={auxcable} isActive={isAuxCable} setIsActive={()=>toggleCarHandler(isAuxCable)} label="AUX-кабель" />
                    <CheckBoxSlider icon={bluetooth} isActive={isBluetooth} setIsActive={()=>toggleCarHandler(isBluetooth)} label="Поддержка Bluetooth" />
                    <CheckBoxSlider icon={cruise} isActive={isCruise} setIsActive={()=>toggleCarHandler(isCruise)} label="Круиз-контроль" />
                    <CheckBoxSlider icon={conditioning} isActive={isConditioning} setIsActive={()=>toggleCarHandler(isConditioning)} label="Кондиционер" />
                    <CheckBoxSlider icon={multimedia} isActive={isMultimedia} setIsActive={()=>toggleCarHandler(isMultimedia)} label="Мультимедия" />
                    <CheckBoxSlider icon={navigation} isActive={isNavigation} setIsActive={()=>toggleCarHandler(isNavigation)} label="Навигация" />
                    <CheckBoxSlider icon={seats_ventilation} isActive={isSeatsVentilation} setIsActive={()=>toggleCarHandler(isSeatsVentilation)} label="Вентиляция сидений" />
                    <CheckBoxSlider icon={seats_heat} isActive={isSeatsHeat} setIsActive={()=>toggleCarHandler(isSeatsHeat)} label="Подогрев сидений" />
                    <CheckBoxSlider icon={roof_rack} isActive={isRoofRack} setIsActive={()=>toggleCarHandler(isRoofRack)} label="Багажник на крыше" />
                    <CheckBoxSlider icon={parktronic} isActive={isParktronic} setIsActive={()=>toggleCarHandler(isParktronic)} label="Парктроники" />
                    <CheckBoxSlider icon={camera} isActive={isCamera} setIsActive={()=>toggleCarHandler(isCamera)} label="Камера заднего вида" />
                </div>
                <h2 className="register__title">Дополнительные услуги</h2>
                <div className="form-section-wrapper">
                    <CheckBoxInput  isActive={isChildrenSeat}
                                    setIsActive={()=>toggleCarHandler(isChildrenSeat)}
                                    title="Детское кресло"
                                    desc="Сдавайте кресло в аренду и получайте дополнительный заработок"
                                    inputValue={childrenSeatPrice}
                                    setInputValue={e=>updateCarHandler({childrenSeatPrice: e.target.value})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isCarDelivery}
                                    setIsActive={()=>toggleCarHandler(isCarDelivery)}
                                    title="Доставка автомобиля"
                                    desc="Привезите автомобиль в удобное для арендатора место и получите доход"
                                    inputValue={carDelivery}
                                    setInputValue={e=>updateCarHandler({carDelivery: e.target.value})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isFreePlace}
                                    setIsActive={()=>toggleCarHandler(isFreePlace)}
                                    title="Завершение аренды в любом месте"
                                    desc="Заберите автомобиль в удобном для арендатора месте за доп. доход"
                                    inputValue={freePlace}
                                    setInputValue={e=>updateCarHandler({freePlace: e.target.value})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isFuel}
                                    setIsActive={()=>toggleCarHandler(isFuel)}
                                    title="Полный бак"
                                    desc="Заправьте полный бак перед сдачей в аренду"
                                    inputValue={fuel}
                                    setInputValue={e=>updateCarHandler({fuel: e.target.value})}
                                    placeholder="1000"
                    />

                </div>
            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={() => history.push("/car/create/3")}
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
        </main>
    )
}
