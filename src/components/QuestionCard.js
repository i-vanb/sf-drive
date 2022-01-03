import React, { useState } from "react"
import Image from 'next/image'
// import "../styles/Faq.css";
import arrowUp from "../img/arrow-up.svg";
import arrowDown from "../img/arrow-down.svg";


function QuestionCard(props) {
    const {question, answer} = props
    const [isActive, setIsActive] = useState(false)

    const onClickHandler = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="faq__wrapper">
            <button
                onClick={onClickHandler}
                type="button"
                className="faq__collapsible">{question}
                {isActive
                    ? <span className="faq__collapsible_arrow"><Image src={arrowUp}/></span>
                    : <span className="faq__collapsible_arrow"><Image src={arrowDown}/></span>
                }
            </button>
            {isActive &&
                <div className="faq__content">
                    <p className="faq__content_text">{answer}</p>
                </div>}
        </div>
    )
}

export default QuestionCard;
