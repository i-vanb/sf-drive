import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {setCar, setError} from "../redux/action/car";
import {NavLink, useHistory} from "react-router-dom";

export const CarCreteStep1 = () => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()
    const car = useSelector(state => state.car)
    const {mark, model, number, year, id, color, vin, ownerId, engine_type, volume, power_ls, power_kvt,
        transmission, run, pts, sts, price_3d, price, price_5d, osago, casco} = car

    const updateCarHandlerOld = update => {
        dispatch(setCar(update))
    }

    return (
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
                        {/*<Input value={car.mark} onChange={updateCarHandler}  />*/}
                        {/*<div className="w100">*/}
                            <input className="w100" type="text" value={mark}  placeholder="марка"
                                   onChange={(e) => updateCarHandlerOld({mark: e.target.value})}
                            />
                        {/*</div>*/}


                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Модель</span>
                        <input type="text" value={model} className="w100" placeholder="модель"
                               onChange={(e) => updateCarHandlerOld({model: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Год выпуска</span>
                        <input type="number" value={year} className="w100" placeholder="год выпуска"
                               onChange={(e) => updateCarHandlerOld({year: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Гос номер</span>
                        <input type="text" value={number} placeholder="гос номер"
                               onChange={(e) => updateCarHandlerOld({number: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">VIN</span>
                        <input type="text" value={vin} placeholder="vin"
                               onChange={(e) => updateCarHandlerOld({vin: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цвет</span>
                        <input type="text" value={color}
                               onChange={(e) => updateCarHandlerOld({color: e.target.value})}
                        />
                    </label>
                </div>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Тип двигателя</span>
                        <select className="w100" value={engine_type} onChange={e=>updateCarHandlerOld({engine_type: e.target.value})}>
                            <option value="1">Бензин</option>
                            <option value="2">Дизель</option>
                            <option value="3">Гибридный двигатель</option>
                            <option value="4">Электродвигатель</option>
                        </select>
                     </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Объем</span>
                        <input type="text" value={volume} className="w100" placeholder="1,0 л"
                               onChange={(e) => updateCarHandlerOld({volume: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Мощность</span>
                        <input type="number" value={power_ls} placeholder="100 л.с."
                               onChange={(e) => updateCarHandlerOld({power_ls: e.target.value})}
                        />
                        <input type="number" value={power_kvt} placeholder="73,5499 кВт"
                               onChange={(e) => updateCarHandlerOld({power_kvt: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Трансмиссия</span>
                        <input className="w100" type="text" value={transmission} placeholder="автоматическая"
                               onChange={(e) => updateCarHandlerOld({transmission: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Пробег</span>
                        <input type="text" value={run} placeholder="10 000 км"
                               onChange={(e) => updateCarHandlerOld({run: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Серия и номер ПТС</span>
                        <input className="w100" type="number" value={pts} placeholder="00 AA 000000"
                               onChange={(e) => updateCarHandlerOld({pts: e.target.value})}
                        />
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Серия и номер СТС</span>
                        <input className="w100" type="text" value={sts} placeholder="00 AA 000000"
                               onChange={(e) => updateCarHandlerOld({sts: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <h2 className="register__title">Стоимость аренды</h2>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Обычная цена</span>
                        <input type="text" value={price} placeholder="1500 руб/сут"
                               onChange={(e) => updateCarHandlerOld({price: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цена при аренде на 3 дня</span>
                        <input type="text" value={price_3d} placeholder="1400 руб/сут"
                               onChange={(e) => updateCarHandlerOld({price_3d: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Цена при аренде более 5 дней</span>
                        <input type="text" value={price_5d} placeholder="1200 руб/сут"
                               onChange={(e) => updateCarHandlerOld({price_5d: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
                <h2 className="register__title">Страхование</h2>
                <div className="form-section-wrapper">
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Полис ОСАГО</span>
                        <input className="w100" type="text" value={osago} placeholder="XXX 000000000"
                               onChange={(e) => updateCarHandlerOld({osago: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                    <label className="register__blockInput">
                        <span className="register__blockInput__title">Полис КАСКО (если есть)</span>
                        <input className="w100" type="text" value={casco} placeholder="XXX 000000000"
                               onChange={(e) => updateCarHandlerOld({casco: e.target.value})}
                        />
                        {/*<span className="error">пароль не совпадает</span>*/}
                    </label>
                </div>
            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={() => history.push("/car/create/2")}
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
                    {isLoading
                        ?
                        <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                        />
                        : <span>Продолжить</span>
                    }
                </button>
            </div>
        </main>
    )
}
