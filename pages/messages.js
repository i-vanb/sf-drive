import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getChats, getMessages, resetMessages, sendMessage} from "../src/redux/action/message";
import {getUserAvatar} from "../src/redux/action/user";
import {useQuery} from "@apollo/client";
import {FETCH_CAR_BY_ID_QUERY} from "../src/utils/graphql-request";
import back from "../src/img/back.svg";
import fileIcon from '../src/img/file-icon.png'
import sendIcon from '../src/img/send-icon.png'
import {withNoAuth} from "../src/withAuth/withAuth";
import Image from 'next/image'


const MessagesContainer = (props) => {
    const {state, getChats, message, notification} = props
    const [chatOpen, setChatOpen] = useState(null)
// console.log(props)
    useEffect(()=>{
        getChats(state.userID)
    }, [state.userID, notification])

    if(chatOpen) return <Chat onBack={()=>setChatOpen(null)} {...chatOpen} sendMessage={sendMessage} me={state.userID}/>

    return (
        <div className="car">
            <div className="content-container">
                <h2>
                    Сообщения
                </h2>
                <div className="messages__container">
                    {message && message.chats.map((item, index) => <ItemMessage key={index} {...item} openChat={setChatOpen}/>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state.auth,
    message: state.message,
    notification: state.message.notification
})

export default ()=>withNoAuth(connect(mapStateToProps, {getChats,sendMessage})(MessagesContainer))


const ItemMessage = (props) => {
    const {photo, name, carId, date, openChat, hasUnread} = props
    // console.log(props)
    const {loading, data} = useQuery(FETCH_CAR_BY_ID_QUERY, {
        variables: {id: carId}
    })

    const [ava, setAva] = useState(null)
    const [car, setCar] = useState(null)

    const openChatHandler = () => {
        openChat({id: props.id, name, ava, carId})
    }

    useEffect(()=>{
        if(!loading) {
            setCar({
                mark: data.findById.mark,
                model: data.findById.model,
                year: data.findById.year,
            })}
    }, [data])

    useEffect(()=>{
        getUserAvatar(photo).then(res => setAva(res))
    }, [])


    return(
        <div className="messages__row" onClick={openChatHandler}>
            {/*{hasUnread && <span className="unread-message"></span>}*/}
            <div className="messages__row__owner">
                {ava && ava.length
                    ? <img className="messages__row__owner__img" src={`data:${ava[0].mimetype};base64,${Buffer.from(ava[0].buffer).toString('base64')}`}/>
                    : <span className="no-photo"/>
                }
                <div className="messages__row__owner__info">
                    <div className="messages__row__owner__name">{name}
                        {hasUnread && <span className="unread-message"></span>}
                    </div>
                    {car && <div className="messages__row__owner__car">{car.mark} {car.model}, {car.year}</div>}
                </div>
            </div>
            <div className="messages__row__date">{new Date(parseInt(date)).toLocaleDateString()}</div>
        </div>
    )
}


const Chat = props => {
    const {onBack, name, id, ava, sendMessage, carId, me} = props
    const dispatch = useDispatch()
    const messages = useSelector(state => state.message.current.messages)
    const chat_info = useSelector(state => state.message.current.user_info)
    const user_id = useSelector(state => state.auth.userID)
    const [textInput, setTextInput] = useState('')
    const ws = useSelector(state => state.system.ws)

    // console.log('props', messages)

    useEffect(() => {
        dispatch(getMessages(id, user_id))
        // getUserAvatar(photo).then(res => setAva(res))
        // ws.emit()
        // ws.emit('messageToServer', {id: 1, message: {text: 'test text'}})
        return ()=>{
            dispatch(resetMessages())
        }
    }, [])

    const onSendMessage = () => {
        if(textInput.length<2) return
        dispatch(sendMessage({message: textInput, from: user_id, to: chat_info.toId, chat_id: id, ws, carId}))
        setTextInput('')
    }

    const onClickSendHandler = () => onSendMessage()

    const onSendPress = e => {
        if(e.keyCode === 13) onSendMessage()
    }

    // console.log(props)

    return(
        <div>
            <div className="register__header chat__wrapper">
                <div className="register__step-back" onClick={onBack}>
                    <Image src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">{name}</div>
                <div className="chat__container">
                    <div className="chat__content">
                        {messages.map((i, index) => {
                            let isDateShow = true
                            if(index>0 && i.date === messages[index-1].date) isDateShow = false
                            // console.log(i)
                            return (
                                <div key={i.id} className={`message__wrapper${i.me ? ' my-message' : ''}`}>
                                    {!i.me && <div className="ava">
                                        {ava.length>0 ? <img
                                                src={`data:${ava[0].mimetype};base64,${Buffer.from(ava[0].buffer).toString('base64')}`}/>
                                            :<span className="no-photo" style={{padding: 0, margin: "-2px"}} />
                                        }
                                    </div>
                                        // :<div className="ava">
                                        // <span className="no-photo" style={{padding: 0, margin: "-2px"}} />
                                        // </div>
                                    }
                                    {isDateShow && <div className="message-date">{i.date}</div>}
                                    <div className="message-cloud">{i.message}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="chat__input-message">
                    <div className="chat__input-message__wrapper">
                        <input placeholder="Начните вводить текст" value={textInput}
                               onChange={e=>setTextInput(e.target.value)} onKeyDown={onSendPress}
                        />

                        <div className="file-icon"><Image src={fileIcon} /></div>

                        <div className="send-icon" onClick={onClickSendHandler}><Image src={sendIcon} /></div>
                    </div>
                </div>
                {/*<h1 className="register__header__title">Загрузите документы</h1>*/}
            </div>

        </div>
    )
}
