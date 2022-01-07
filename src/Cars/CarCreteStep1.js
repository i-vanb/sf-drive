import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, setError} from "../redux/action/car";
import {NavLink, useHistory} from "react-router-dom";

const CarCreateContainer = () => {
    // const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const car = useSelector(state => state.car)
    // const {mark, model, number, year, id, color, vin, ownerId, engine_type, volume, power_ls, power_kvt,
    //     transmission, run, pts, sts, price_3d, price, price_5d, osago, casco, city} = car

    const updateCarHandlerOld = update => dispatch(setCar(update))

    const goNextStep = () => history.push("/car/create/2")

    return <NewCarForm updateCar={updateCarHandlerOld} car={car} goNextStep={goNextStep}/>
}

export default CarCreateContainer


export const NewCarForm = props => {
    const {mark, model, number, year, id, color, vin, ownerId, engine_type, volume, power_ls, power_kvt,
        transmission, run, pts, sts, price_3d, price, price_5d, osago, casco, city} = props.car
    const {updateCar, goNextStep} = props

    return(
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">Шаг 1 из 4</div>
                <h1 className="register__header__title">Новый автомобиль</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Информация об автомобиле</h2>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Марка</span>
                        <input className="w100" type="text" value={mark}  placeholder="марка"
                               onChange={(e) => updateCar({mark: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Модель</span>
                        <input type="text" value={model} className="w100" placeholder="модель"
                               onChange={(e) => updateCar({model: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Год выпуска</span>
                        <input type="number" value={year} className="w100" placeholder="год выпуска"
                               onChange={(e) => updateCar({year: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Гос номер</span>
                        <input type="text" value={number} placeholder="гос номер"
                               onChange={(e) => updateCar({number: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">VIN</span>
                        <input type="text" value={vin} placeholder="vin"
                               onChange={(e) => updateCar({vin: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цвет</span>
                        <input type="text" value={color}
                               onChange={(e) => updateCar({color: e.target.value})}
                        />
                    </label>
                </div>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Тип двигателя</span>
                        <select className="w100" value={engine_type} onChange={e=>updateCar({engine_type: e.target.value})}>
                            <option value="1">Бензин</option>
                            <option value="2">Дизель</option>
                            <option value="3">Гибридный двигатель</option>
                            <option value="4">Электродвигатель</option>
                        </select>
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Объем</span>
                        <input type="text" value={volume} className="w100" placeholder="1,0 л"
                               onChange={(e) => updateCar({volume: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Мощность</span>
                        <input type="number" value={power_ls} placeholder="100 л.с."
                               onChange={(e) => updateCar({power_ls: e.target.value})}
                        />
                        <input type="number" value={power_kvt} placeholder="73,5499 кВт"
                               onChange={(e) => updateCar({power_kvt: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Трансмиссия</span>
                        <input className="w100" type="text" value={transmission} placeholder="автоматическая"
                               onChange={(e) => updateCar({transmission: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Пробег</span>
                        <input type="text" value={run} placeholder="10 000 км"
                               onChange={(e) => updateCar({run: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Серия и номер ПТС</span>
                        <input className="w100" type="number" value={pts} placeholder="00 AA 000000"
                               onChange={(e) => updateCar({pts: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Серия и номер СТС</span>
                        <input className="w100" type="text" value={sts} placeholder="00 AA 000000"
                               onChange={(e) => updateCar({sts: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <h2 className="register__title">Стоимость аренды</h2>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Местонахождение</span>
                        <input type="text" value={city} placeholder="Город"
                               onChange={(e) => updateCar({city: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Обычная цена</span>
                        <input type="text" value={price} placeholder="1500 руб/сут"
                               onChange={(e) => updateCar({price: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цена при аренде на 3 дня</span>
                        <input type="text" value={price_3d} placeholder="1400 руб/сут"
                               onChange={(e) => updateCar({price_3d: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цена при аренде более 5 дней</span>
                        <input type="text" value={price_5d} placeholder="1200 руб/сут"
                               onChange={(e) => updateCar({price_5d: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <h2 className="register__title">Страхование</h2>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Полис ОСАГО</span>
                        <input className="w100" type="text" value={osago} placeholder="XXX 000000000"
                               onChange={(e) => updateCar({osago: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Полис КАСКО (если есть)</span>
                        <input className="w100" type="text" value={casco} placeholder="XXX 000000000"
                               onChange={(e) => updateCar({casco: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
            </form>
            <div className="register__footer  lineTop">
                <button onClick={goNextStep}
                    disabled={
                        mark === '' ||
                        model === '' ||
                        number === '' ||
                        year === '' ||
                        color === '' ||
                        vin === '' ||
                        engine_type === '' ||
                        volume === '' ||
                        power_ls === '' ||
                        power_kvt === '' ||
                        transmission === '' ||
                        run === '' ||
                        pts === '' ||
                        sts === '' ||
                        price_3d === '' ||
                        price === '' ||
                        price_5d === '' ||
                        osago === '' ||
                        casco === ''
                    }
                >
                    {/*{isLoading*/}
                    {/*    ?*/}
                    {/*    <Loader*/}
                    {/*        type="TailSpin"*/}
                    {/*        color="#fafafa"*/}
                    {/*        height={30}*/}
                    {/*        width={30}*/}
                    {/*    />*/}
                    {/*    : */}
                    <span id="test">Продолжить</span>
                    {/*}*/}
                </button>
            </div>
        </main>
    )
}
