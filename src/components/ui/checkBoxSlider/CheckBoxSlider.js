import React from 'react';
import "./style.css"


export const CheckBoxSlider = ({isActive, setIsActive, label, icon}) => {

    const setIsActiveHandler = () => {
        setIsActive(!isActive)
    }

    return(
        <div className="checkbox-input__container">
            <div className="checkbox-input__label">
                {icon && <img src={icon}/>}
                {label}
            </div>
            <div onClick={setIsActiveHandler} className={`checkbox-input__slider ${!!isActive && "active"}`}></div>
        </div>
    )
}
