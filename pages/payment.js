import React, {useEffect, useState} from 'react';
// import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {applyBooking, checkPaymentToken} from "../src/redux/action/booking";
import {CarRentSuccess} from "../src/Cars/CarRentSuccess";
import {CarRentError} from "../src/Cars/CarRentError";
import {useHistory} from "react-router-dom";
import {withNoAuth} from "../src/withAuth/withAuth";
import {useRouter} from "next/router";


const Payment = () => {
    const dispatch = useDispatch()
    const history = useRouter()
    const booking = useSelector(state => state.booking.current)
// console.log(booking)
    const [num, setNum] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [cvv, setCvv] = useState('')
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [accessError, setAccessError] = useState('')
    const [isAccess, setIsAccess] = useState(false)


    useEffect(()=>{
        const token = localStorage.getItem('paymentToken')
        dispatch(checkPaymentToken(token)).then(res => {
            if(!res) return setAccessError('Не найдено бронирований. Начните бронировать прямо сейчас')
            return setIsAccess(true)
        })
    }, [])

    const approvePayment = async () => {
        const token = localStorage.getItem('paymentToken')
        const isValid = await dispatch(checkPaymentToken(token))
        if(isValid) {
            // post data on payment service
            const isPaymentApprove = num.length === 16
                && cvv.length === 3
                && name.split(' ').length === 2
                && !isNaN(-num) && !isNaN(-cvv)
            if(isPaymentApprove) {
                dispatch(applyBooking(booking.id))
                setIsSuccess(true)
            } else {
                setError('Проверьте правильность введенных данных')
            }
        } else {
            setAccessError('Время сессии истекло. Бронь на автомобиль будет снята. Если вы хотите - вы сможете снова забронировать автомобиль в ближайшие минуты')
        }
    }

    if(isSuccess) return <CarRentSuccess goToMain={()=>history.push('/')} />
    if(accessError) return <CarRentError message={accessError} goToMain={()=>history.push('/')} />
    if (!isAccess) return null

    return(
        <div>
            <div className="payment">
                <div>
                    <h2>Оплата картой</h2>
                </div>
                <div className="payment__card">
                    <div>
                        <div className="payment__card__line">
                            <div className="payment__card__line__num">
                                <span>Номер карты</span>
                                <input value={num} onChange={e=>setNum(e.target.value)} placeholder="0000 0000 0000 0000"/>
                            </div>
                            <div className="payment__card__line__date">
                                <span>Срок действия</span>
                                <input value={date} onChange={e=>setDate(e.target.value)} placeholder="00/00"/>
                            </div>
                        </div>
                        <div className="payment__card__line">
                            <div className="payment__card__line__num">
                                <span>Держатель карты</span>
                                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Ivan Ivanov"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="payment__card__line">
                            <div className="payment__card__line__cvv">
                                <span>CVV</span>
                                <input value={cvv} onChange={e=>setCvv(e.target.value)} placeholder="000"/>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{color:"red", minHeight: "29px"}}>
                    {error}
                </div>
            </div>
            <div className="section-line"/>
            <div className="btn-group">
                <div onClick={approvePayment} className="btn-green">Оплатить</div>
            </div>
        </div>
    )
}

export default ()=>withNoAuth(Payment)
