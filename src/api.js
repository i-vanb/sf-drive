import axios from "axios";
import {resetLoading, setLoading} from "./redux/action/system";


export const fetchData = ({method, url, options, dispatch, headers}) => {
    dispatch && dispatch(setLoading())

    const token = localStorage.getItem('accessToken')

    const params = method === 'get' ? {...options, headers: {...headers, 'token':token}} : options
    const data = axios[method](url, params, {headers: {...headers, 'token':token}})
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


