import axios from "axios";
import {resetLoading, setLoading} from "./redux/action/system";


export const fetchData = ({method, url, options, dispatch}) => {
    dispatch(setLoading())

    const data = axios[method](url, options)
        .then((data)=>{
            dispatch(resetLoading())
            return data
        })
        .catch(({response})=>{
            dispatch(resetLoading())
            return response
        })
    return data
}


