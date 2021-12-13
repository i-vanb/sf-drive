import React, {useEffect} from "react";
import {connect} from "react-redux";
import './style.css'
import man from '../img/team/1.png'
import {getMessagesList} from "../redux/action/message";


const MessagesContainer = (props) => {
    const {userID, getMessagesList, message} = props


    useEffect(()=>{
        getMessagesList(userID)
    }, [userID])

    return (
        <div className="car">
            <div className="content-container">
                <h2>
                    Сообщения
                </h2>
                <div className="messages__container">
                    {message.map((item, index) => <ItemMessage key={index}/>)}

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state.auth,
    message: state.message
})

export default connect(mapStateToProps, {getMessagesList})(MessagesContainer)


const ItemMessage = (props) => {
    return(
        <div className="messages__row">
            <div className="messages__row__owner">
                {props.img
                    ? <img className="messages__row__owner__img" src={man}/>
                    : <span className="no-photo"/>
                }
                <div className="messages__row__owner__info">
                    <div className="messages__row__owner__name">И.Сусагин</div>
                    <div className="messages__row__owner__car">Хонда Классик, 2000</div>
                </div>
            </div>
            <div className="messages__row__date">12.09.2222</div>
        </div>
    )
}
