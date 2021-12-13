import axios from "axios";
import {resetLoading, setLoading} from "./redux/action/system";


export const fetchData = ({method, url, options, dispatch}) => {
    dispatch && dispatch(setLoading())

    const data = axios[method](url, options)
        .then((data)=>{
            dispatch && dispatch(resetLoading())
            return data
        })
        .catch(({response})=>{
            dispatch && dispatch(resetLoading())
            return response
        })
    return data
}


