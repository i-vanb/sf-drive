import React, {useEffect, useState} from "react";
import back from "../img/back.svg";
import star from "../img/star.png";
import {getFiles, resetCar, setCar} from "../redux/action/car";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {resetDrive, setCurrentDrive, toggleDriveOption} from "../redux/action/drive";
import {toImg} from "../utils/toImg";
import {useQuery} from "@apollo/client";
import {FETCH_CAR_BY_ID_QUERY} from "../utils/graphql-request";
import {toPriceView} from "../utils/toPriceView";
import {CheckBoxInput} from "../components/ui/checkBoxInput/CheckBoxInput";
import {getDateMonth} from "../utils/date_utils";
import {Calendar} from "../components/calendar/Calendar";
import {CarRentSuccess} from "./CarRentSuccess";
import {createBooking, getNewCurrentBooking, updateCurrentBooking} from "../redux/action/booking";


const CarRent = props => {
    const {loading, data} = useQuery(FETCH_CAR_BY_ID_QUERY, {
        variables: {id: props.match.params.id}
    })

    const [isSuccess,setIsSuccess] = useState(false)
    const {state, drive, auth, ws, booking, toggleDriveOption, getNewCurrentBooking, updateCurrentBooking,
        createBooking, busyDates} = props
    const {childrenSeatPrice, carDeliveryPrice, freePlacePrice, price, price_3d, price_5d} = state
    const {isChildrenSeat, isCarDelivery, isFreePlace} = drive

    // console.log(booking)

    const getExtraOptionSum = () => {
        const seat = isChildrenSeat ? childrenSeatPrice || 1000 : 0
        const delivery = isCarDelivery ? carDeliveryPrice || 1000 : 0
        const freePlace = isFreePlace ? freePlacePrice || 1000 : 0
        return seat+delivery+freePlace
    }

    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [calendarState, setCalendarState] = useState(undefined)
    // const begin = props.drive.begin
    // const end = props.drive.end
    // const setBegin = begin => props.setCurrentDrive({begin})
    // const setEnd = end => props.setCurrentDrive({end})

    const setBegin = begin => updateCurrentBooking({begin})
    const setEnd = end => updateCurrentBooking({end})

    const dayCount = (booking.end - booking.begin)/1000/60/60/24

    const priceTarif = () => {
        if(dayCount>=5) {
            return price_5d
        } else if(dayCount>=3) {
            return price_3d
        } else {
            return price
        }
    }

    const totalPrice = () => {
        const price = (priceTarif()*dayCount) + getExtraOptionSum() + 1000
        // updateCurrentBooking({totalPrice: price})
        return price
        // return (priceTarif()*dayCount) + getExtraOptionSum() + 1000
    }

    const toggleDriveHandler = props => {
        toggleDriveOption(props)
    }

    const updateCarHandler = props => {}//console.log('update', props)

    useEffect(()=>{
        if(!calendarState) {
            const now = new Date()
            const year = now.getFullYear()
            const month = now.getMonth()
            const date = now.getDate()
            const newState = {
                current_month: month,
                current_year: year,
                next_month: month < 11 ? month+1 : 0,
                next_year: month < 11 ? year : year+1,
                prev_month: month > 0 ? month-1 : 11,
                prev_year: month > 0 ? year : year-1
            }
            setCalendarState(newState)
        }
    }, [])

    useEffect(()=>{
        if(state.id !== props.match.params.id) {
            props.resetCar()
            props.resetDrive()
            getNewCurrentBooking()
        }
        if(!state.id && !loading) {
            props.setCar(data.findById)
            props.getFiles(data.findById.docs, 'doc')
            props.getFiles(data.findById.photos, 'photo')
        }
        if(!loading) {
            updateCurrentBooking({
                passengerID: auth.userID,
                carID: data.findById.id,
                ownerID: data.findById.ownerId,
                carDeliveryPrice: data.findById.carDeliveryPrice,
                childSeatPrice: data.findById.childrenSeatPrice,
                anyPlaceEndPrice: data.findById.freePlacePrice,
                begin: drive.begin,
                end: drive.end
            })
        }
    }, [props.match.params.id, data])

    useEffect(()=>{
        // getNewCurrentBooking()
    }, [])

    const getPayment = async () => {
        // updateCurrentBooking({totalPrice: totalPrice()})
        // пока нет платежей делаем следующее
        createBooking({
            ...booking,
            totalPrice: totalPrice(),
            mark: state.mark,
            model: state.model,
            year: state.year
        }, ws).then(res => props.history.push('/payment'))
        // props.history.push('/payment')
        // setIsSuccess(true)
    }

    if(!state.id && !state.photo_files) return null

    // if(isSuccess) return <CarRentSuccess goToMain={()=>props.history.push('/')} />

    return(
        <div className="">
            <div className="content-container">
                <div className="car_detail">
                    <div className="register__step-back" onClick={() => props.history.goBack()}>
                        <img src={back}/>
                        <span>Назад</span>
                    </div>
                </div>
                <h1>Оформление аренды</h1>
                <div className="drive-check">
                    <div className="drive-check__header">Ваш чек</div>
                    <div className="drive-check__content">
                        <div className="drive-check__row">
                            <span>Стоймость аренды</span>
                            <span>{toPriceView(priceTarif())} ₽</span>
                        </div>
                        {priceTarif()<price &&
                            <div className="drive-check__row subtitle">
                                <span>{booking.begin && booking.end && `${getDateMonth(booking.begin)} - ${getDateMonth(booking.end)}`}</span>
                                <span className="old-price">{toPriceView(price)} ₽</span>
                            </div>}
                        <div className="drive-check__row">
                            <span>Доп.услуги</span>
                            <span>{toPriceView(getExtraOptionSum())} ₽</span>
                        </div>
                        <div className="drive-check__row">
                            <span>Комиссия сервиса</span>
                            <span>1 000 ₽</span>
                        </div>
                    </div>
                    <div className="drive-check__footer">
                        <span>К оплате</span>
                        {totalPrice()>0 && <span>{totalPrice()} ₽</span>}
                    </div>
                </div>
                <div className="info-block__wrapper w590">
                    <div className="info-block__header">Состав заказа</div>
                    <div className="info-block__content-row">
                        <div className="info-block__content-w150">
                            <div className="info-block__avatar">
                                {state.photo_files && toImg(state.photo_files[0])}
                            </div>
                        </div>
                        <div className="info-block__content-col">
                            <div className="collage_car__main__reviews">
                                <img src={star}/>
                                <span>4,5</span>
                                <span>(4 отзыва)</span>
                            </div>
                            <div className="collage_car__main__title">
                                {state.mark} {state.model}, {state.year}
                            </div>
                            <div className="collage_car__main__subtitle">
                                {toPriceView(15000)} в сутки
                            </div>
                        </div>
                    </div>
                    <div className="info-block__header">Информация о поездке</div>
                    <div className="info-block__content-row">
                        <div className="info-block__content-label">Период аренды</div>
                        <div className="info-block__content-input">
                            <div className="date-picker" onClick={()=>setIsShowCalendar(!isShowCalendar)}>
                                <div className="date-picker__item">
                                    {booking.begin && getDateMonth(booking.begin)}
                                </div>
                                <span>-</span>
                                <div className="date-picker__item">
                                    {booking.end && getDateMonth(booking.end)}
                                </div>
                                <div className="date-picker__btn"></div>
                            </div>
                            {/*<input type="date" />*/}
                        </div>
                        {isShowCalendar &&
                            <div className="calendar-modal">
                                <Calendar begin={booking.begin} setBegin={setBegin}
                                          end={booking.end} setEnd={setEnd} busyDates={busyDates}
                                          state={calendarState} setState={setCalendarState}/>
                            </div>}
                    </div>
                    <div className="info-block__content-row">
                        <div className="info-block__content-label">Планы на поездку</div>
                        <div className="info-block__content-input">
                            <textarea value={booking.description}
                                      onChange={(e)=>updateCurrentBooking({description: e.target.value})}
                                      rows="5" placeholder="Опишите свои планы на поездку для вледельца автомобиля"/>
                        </div>
                    </div>
                    <div className="info-block__header">Дополнительные услуги</div>
                    {data && data.findById.isChildrenSeat && <CheckBoxInput isActive={booking.isChildSeat}
                                    setIsActive={() => updateCurrentBooking({isChildSeat: !booking.isChildSeat})}
                                    title="Детское кресло"
                                    desc="Сдавайте кресло в аренду и получайте дополнительный заработок"
                                    inputValue={booking.childSeatPrice}
                                    setInputValue={e => updateCarHandler({childrenSeatPrice: e})}
                                    placeholder="1000" inputLock
                    />}
                    {data && data.findById.isCarDelivery && <CheckBoxInput isActive={booking.isCarDelivery}
                                    setIsActive={() => updateCurrentBooking({isCarDelivery: !booking.isCarDelivery})}
                                    title="Доставка автомобиля"
                                    desc="Привезите автомобиль в удобное для арендатора место и получите доход"
                                    inputValue={booking.carDeliveryPrice}
                                    setInputValue={e => updateCarHandler({carDeliveryPrice: e})}
                                    placeholder="1000" inputLock
                    />}
                    {data && data.findById.isFreePlace && <CheckBoxInput isActive={booking.isAnyPlaceEnd}
                                    setIsActive={() => updateCurrentBooking({isAnyPlaceEnd: !booking.isAnyPlaceEnd})}
                                    title="Завершение аренды в любом месте"
                                    desc="Заберите автомобиль в удобном для арендатора месте за доп. доход"
                                    inputValue={booking.isAnyPlaceEnd}
                                    setInputValue={e => updateCarHandler({freePlacePrice: e})}
                                    placeholder="1000" inputLock
                    />}
                </div>
            </div>
            <div className="section-line"/>
            <div className="btn-group">
                <div onClick={getPayment} className="btn-green">Перейти к оплате</div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    state: state.car, drive: state.drive.current, booking: state.booking.current, busyDates: state.booking.busyDates,
    auth: state.auth, ws: state.system.ws
})

const mapDispatchToProps = {
    setCar, getFiles, resetCar, resetDrive, setCurrentDrive, toggleDriveOption,
    updateCurrentBooking, getNewCurrentBooking, createBooking
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CarRent)
