import React, {useEffect} from 'react'
import {withNoAuth} from "../../../src/withAuth/withAuth";
import {useDispatch, useSelector} from "react-redux";
import {resetCar} from "../../../src/redux/action/car";
import {useRouter} from "next/router";


const Index = () => {
    const carID = useSelector(state => state.car.id)
    const ownerId = useSelector(state => state.auth.userID)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(()=>{
        dispatch(resetCar(ownerId))
        router.push('/car/create/1')
    }, [carID])

    return null
}

export default ()=>withNoAuth(Index)
