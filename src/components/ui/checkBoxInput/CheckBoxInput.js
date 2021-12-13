import React from 'react';
import "./style.css"


export const CheckBoxInput = ({isActive, setIsActive, title, desc, inputValue, setInputValue, placeholder, inputLock}) => {

    const setIsActiveHandler = () => {
        if (!isActive) {
            setInputValue(placeholder)
        } else {
            setInputValue("")
        }
        setIsActive(!isActive)
    }

    const onChangeHandler = e => {
        if (!isActive) setIsActiveHandler(true)
        if(!e.target.value) setIsActiveHandler(false)
        setInputValue(e.target.value)

    }
    return(
        <div className="checkbox-input__container">
            <div className="checkbox-input__label">
                <div className="checkbox-input__label__title">{title}</div>
                <div className="checkbox-input__label__desc">{desc}</div>
            </div>
            <div className="checkbox-input__active-wrapper">
                <div
                    className={inputValue || isActive ? "checkbox-input__label__input active" : "checkbox-input__label__input"}>
                    {inputLock
                        ? <span className="input-locked">{inputValue}</span>
                        : <input className={isActive ? "active" : ""} value={inputValue} onChange={onChangeHandler}
                            placeholder={placeholder}/>}
                </div>
                <div onClick={setIsActiveHandler} className={`checkbox-input__slider ${!!isActive && "active"}`}></div>
            </div>
        </div>
    )
}
