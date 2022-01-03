import React from 'react';
import Image from 'next/image'


export const CheckBoxSlider = ({isActive, setIsActive, label, icon}) => {

    const setIsActiveHandler = () => {
        setIsActive(!isActive)
    }

    return(
        <div className="checkbox-input__container">
            <div className="checkbox-input__label">
                {icon && <span className="checkbox-input__label__img_wrapper"><Image src={icon}/></span>}
                {label}
            </div>
            <div onClick={setIsActiveHandler} className={`checkbox-input__slider ${!!isActive && "active"}`}></div>
        </div>
    )
}
