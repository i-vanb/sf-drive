import React, {useEffect, useState} from "react";
import './style.css';



export const Input = ({value, onChange, name, error, errorName, required}) => {
    const errName = errorName || name

    useEffect(()=>{
        if(required) onChange({error: {[errName]:""}, update:{}})
    }, [])

    const onChangeHandler = e => {
        const error = {[errName]: ""}
        const update = {[name]: e.target.value}
        onChange(error, update)
    }

    return(
        <InputElement value={value} onChange={onChangeHandler} error={error} />
    )
}


const InputElement = (props) => {
    const {value, onChange, prompts, error} = props

    return(
        <div className="input__container">
            <div className="input__wrapper">

                <input style={error && {borderColor: "red"}} className="input" type="text" value={value} placeholder="марка"
                       onChange={onChange}/>

                {error && <span className="input__error">{error}</span>}

                {prompts && prompts.map(i => <div className="input__popup-list">
                    <div className="input__popup-list__item">{i.prompt}</div>
                </div>)}

            </div>
        </div>
    )
}

