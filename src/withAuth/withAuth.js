import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";


export const withAuth = (Component) => {
    const isAuth = useSelector(state => state.auth.isAuthorized)
    const router = useRouter()

    useEffect(()=>{
        if(isAuth) {
            router.push('/')
        }
    }, [isAuth])

    return <Component />
}

export const withNoAuth = (Component) => {
    const isAuth = useSelector(state => state.auth.isAuthorized)
    const router = useRouter()

    useEffect(()=>{
        if(!isAuth) {
            // router.push('/')
        }
    }, [isAuth])

    return <Component />
}
