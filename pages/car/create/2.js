import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, toggleCar} from "../../../src/redux/action/car";
import {CheckBoxSlider} from "../../../src/components/ui/checkBoxSlider/CheckBoxSlider";
import {CheckBoxInput} from "../../../src/components/ui/checkBoxInput/CheckBoxInput";
import losfix from "../../../src/img/losfix.svg";
import airbags from "../../../src/img/airbags.svg";
import heater from "../../../src/img/heater.svg";
import auxcable from "../../../src/img/auxcable.svg";
import bluetooth from "../../../src/img/bluetooth.svg";
import cruise from "../../../src/img/cruise.svg";
import conditioning from "../../../src/img/conditioning.svg";
import multimedia from "../../../src/img/multimedia.svg";
import navigation from "../../../src/img/navigation.svg";
import seats_ventilation from "../../../src/img/seats_ventilation.svg";
import seats_heat from "../../../src/img/seats_heat.svg";
import roof_rack from "../../../src/img/roof_rack.svg";
import parktronic from "../../../src/img/parktronic.svg";
import camera from "../../../src/img/camera.svg";
import back from "../../../src/img/back.svg";
import {useRouter} from "next/router";
import {withNoAuth} from "../../../src/withAuth/withAuth";
import Image from 'next/image'


const CarCrete = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useRouter()
    const car = useSelector(state => state.car)
    const {isLosfix, isAirbags, isHeater, isAuxCable, isBluetooth, isCruise, isConditioning, isMultimedia, isNavigation,
        isSeatsVentilation, isSeatsHeat, isRoofRack, isParktronic, isCamera, isChildrenSeat, isCarDelivery, isFreePlace,
        isFuel, childrenSeatPrice, carDeliveryPrice, freePlacePrice, fuelPrice} = car

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
                    <Image src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 2 из 4</div>
                <h1 className="register__header__title">Дополнительно</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Опции автомобиля</h2>
                <div className="form-section-wrapper">
                    <CheckBoxSlider icon={losfix} isActive={isLosfix} setIsActive={()=>toggleCarHandler('isLosfix')} label="Крепления Iosfix" />
                    <CheckBoxSlider icon={airbags} isActive={isAirbags} setIsActive={()=>toggleCarHandler('isAirbags')} label="Подушки безопасности" />
                    <CheckBoxSlider icon={heater} isActive={isHeater} setIsActive={()=>toggleCarHandler('isHeater')} label="Автономный подогреватель" />
                    <CheckBoxSlider icon={auxcable} isActive={isAuxCable} setIsActive={()=>toggleCarHandler('isAuxCable')} label="AUX-кабель" />
                    <CheckBoxSlider icon={bluetooth} isActive={isBluetooth} setIsActive={()=>toggleCarHandler('isBluetooth')} label="Поддержка Bluetooth" />
                    <CheckBoxSlider icon={cruise} isActive={isCruise} setIsActive={()=>toggleCarHandler('isCruise')} label="Круиз-контроль" />
                    <CheckBoxSlider icon={conditioning} isActive={isConditioning} setIsActive={()=>toggleCarHandler('isConditioning')} label="Кондиционер" />
                    <CheckBoxSlider icon={multimedia} isActive={isMultimedia} setIsActive={()=>toggleCarHandler('isMultimedia')} label="Мультимедия" />
                    <CheckBoxSlider icon={navigation} isActive={isNavigation} setIsActive={()=>toggleCarHandler('isNavigation')} label="Навигация" />
                    <CheckBoxSlider icon={seats_ventilation} isActive={isSeatsVentilation} setIsActive={()=>toggleCarHandler('isSeatsVentilation')} label="Вентиляция сидений" />
                    <CheckBoxSlider icon={seats_heat} isActive={isSeatsHeat} setIsActive={()=>toggleCarHandler('isSeatsHeat')} label="Подогрев сидений" />
                    <CheckBoxSlider icon={roof_rack} isActive={isRoofRack} setIsActive={()=>toggleCarHandler('isRoofRack')} label="Багажник на крыше" />
                    <CheckBoxSlider icon={parktronic} isActive={isParktronic} setIsActive={()=>toggleCarHandler('isParktronic')} label="Парктроники" />
                    <CheckBoxSlider icon={camera} isActive={isCamera} setIsActive={()=>toggleCarHandler('isCamera')} label="Камера заднего вида" />
                </div>
                <h2 className="register__title">Дополнительные услуги</h2>
                <div className="form-section-wrapper">
                    <CheckBoxInput  isActive={isChildrenSeat}
                                    setIsActive={()=>toggleCarHandler('isChildrenSeat')}
                                    title="Детское кресло"
                                    desc="Сдавайте кресло в аренду и получайте дополнительный заработок"
                                    inputValue={childrenSeatPrice}
                                    setInputValue={e=>updateCarHandler({childrenSeatPrice: e})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isCarDelivery}
                                    setIsActive={()=>toggleCarHandler('isCarDelivery')}
                                    title="Доставка автомобиля"
                                    desc="Привезите автомобиль в удобное для арендатора место и получите доход"
                                    inputValue={carDeliveryPrice}
                                    setInputValue={e=>updateCarHandler({carDeliveryPrice: e})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isFreePlace}
                                    setIsActive={()=>toggleCarHandler('isFreePlace')}
                                    title="Завершение аренды в любом месте"
                                    desc="Заберите автомобиль в удобном для арендатора месте за доп. доход"
                                    inputValue={freePlacePrice}
                                    setInputValue={e=>updateCarHandler({freePlacePrice: e})}
                                    placeholder="1000"
                    />
                    <CheckBoxInput  isActive={isFuel}
                                    setIsActive={()=>toggleCarHandler('isFuel')}
                                    title="Полный бак"
                                    desc="Заправьте полный бак перед сдачей в аренду"
                                    inputValue={fuelPrice}
                                    setInputValue={e=>updateCarHandler({fuelPrice: e})}
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

export default ()=>withNoAuth(CarCrete)
