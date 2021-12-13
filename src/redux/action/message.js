import {fetchData} from "../../api";
import {GET_ALL_MESSAGES} from "../reducer/message";

export const getMessagesList = id => dispatch => {
    // fetchData()

    dispatch({type: GET_ALL_MESSAGES, payload: dump})
}


const dump = [
    {id: 1, name: 'А.Комрад', list: [{id:1,fromMe:false,text:'Привет!'},{id:2,fromMe:false,text:'Привет! Как дела?'}]}
]
