import React, {useEffect, useState} from "react";
import './style.css'
import {toCapitalize} from "../../utils/stringHelper";
import {getCalendarArray} from "../../utils/date_utils";
import * as buffer from "buffer";

const getMonth = number => {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    return months[number]
}

export const Calendar = ({begin, setBegin, end, setEnd, state, setState, busyDates}) => {

    const setActiveHandler = (year, month, date) => {
        const newDate = new Date(year, month, date)
        if(!begin && !end) {
            setBegin(newDate)
        } else if(end) {
            setEnd(undefined)
            setBegin(newDate)
        } else {
            if(newDate > begin) {
                setEnd(newDate)
            } else {
                setEnd(begin)
                setBegin(newDate)
            }
        }
    }

    useEffect(()=>{
        if(begin && end) {
            busyDates.map(i => {
                const beginResMS = new Date(i.begin).getTime()
                const endResMS = new Date(i.end).getTime()
                const beginMS = new Date(begin).getTime()
                const endMS = new Date(end).getTime()

                // const day = new Date(year, month, number).getTime()
                if(beginResMS >= beginMS && beginResMS <= endMS
                    || endResMS >= beginMS && endResMS <= endMS) {
                    setEnd(undefined)
                    setBegin(undefined)
                }
            })
        }
    }, [begin, end])

    if(!state) return null

    const nextMonth = () => {
        const newState = {
            current_month: state.next_month,
            current_year: state.next_year,
            next_month: state.next_month < 11 ? state.next_month+1 : 0,
            next_year: state.next_month < 11 ? state.next_year : state.next_year+1,
            prev_month: state.current_month,
            prev_year: state.current_year
        }
        setState({...state, ...newState})
    }
    const prevMonth = () => {
        const newState = {
            current_month: state.prev_month,
            current_year: state.prev_year,
            next_month: state.current_month,
            next_year: state.current_year,
            prev_month: state.prev_month > 0 ? state.prev_month-1 : 11,
            prev_year: state.prev_month > 0 ? state.prev_year : state.prev_year-1,
        }
        setState({...state, ...newState})
    }

    return(
        <div className="calendar">
            <div className="calendar__prev-btn" onClick={prevMonth}>{"<"}</div>
            <CalendarMonth month={state.current_month} year={state.current_year} setActive={setActiveHandler} begin={begin} end={end} busyDates={busyDates}/>
            <CalendarMonth month={state.next_month} year={state.next_year} setActive={setActiveHandler} begin={begin} end={end} busyDates={busyDates}/>
            <div className="calendar__next-btn" onClick={nextMonth}>{">"}</div>
        </div>
    )
}


const CalendarMonth = ({month, year, setActive, begin, end, busyDates}) => {
    const arrayCalendar = getCalendarArray(year, month, busyDates)

    const setActiveHandler = date => setActive(year, month, date)

    return(
        <div className="calendar__container">
            <div className="calendar__header">{toCapitalize(getMonth(month))} {year}</div>
            {/*<div className="calendar__header">{getMonth(month).toUpperCase()} {year}</div>*/}
            <div className="calendar__days">
                <div className="calendar__days__header">
                    <div className="calendar__days__header__item">пн</div>
                    <div className="calendar__days__header__item">вт</div>
                    <div className="calendar__days__header__item">ср</div>
                    <div className="calendar__days__header__item">чт</div>
                    <div className="calendar__days__header__item">пт</div>
                    <div className="calendar__days__header__item">сб</div>
                    <div className="calendar__days__header__item">вс</div>
                </div>
                <div className="calendar__days__list">
                    {arrayCalendar.map((d, index) =>
                        <Day key={index}
                             number={d.number}
                             isPast={d.isPast}
                             setActive={setActiveHandler}
                             isActive={begin && new Date(year, month, d.number) > begin && end && new Date(year, month, d.number) < end }
                             isBegin={begin && new Date(year, month, d.number).toString() === begin.toString() }
                             isEnd={end && new Date(year, month, d.number).toString() === end.toString() || begin && new Date(year, month, d.number).toString() === begin.toString() && !end}
                    />)}
                </div>
            </div>
        </div>
    )
}

const Day = ({number, isPast, setActive, isActive, isBegin, isEnd}) => {

    if(!number) return <div className="calendar__days__list-item"/>

    const setActiveHandler = () => setActive(number)

    const getClassStyle = () => {
        let className = 'calendar__days__list-item'
        if(isPast) className += ' past'
        if(isBegin) className += ' start'
        if(isActive) className += ' active'
        if(isEnd) className += ' finish'
        return className
    }

    return(
        // <div onClick={setActiveHandler} className={`calendar__days__list-item${isPast?' past':isActive?' active':''}`}>{number}</div>
        <div onClick={!isPast ? setActiveHandler : ()=>{}} className={getClassStyle()}>
            <div className={isBegin || isEnd ? 'active-number':''}>{number}</div>
        </div>
    )
}
