import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {
    createCar,
    createCarInGraphQL,
    createFilesArray,
    setCar,
    setCarDoc,
    setCarPhoto,
    setCreated, transportCarToServer
} from "../redux/action/car";
import cloud from "../img/cloud.svg";
import {useHistory} from "react-router-dom";
import back from "../img/back.svg";
import {CarSuccess} from "./CarSuccess";
import {CREATE_CAR_REQUEST, FETCH_All_CARS_QUERY, FETCH_CARS_BY_CITY_QUERY} from "../utils/graphql-request";
import {useMutation, useQuery} from "@apollo/client";
import {getUserCars} from "../redux/action/user";


export const CarCreteStep4 = () => {
    const [isLoading, setIsLoading] = useState(false)
    const car = useSelector(state => state.car)
    const {isCreated} = car

    const [createCar, {error}] = useMutation(CREATE_CAR_REQUEST
        , {
        update(proxy, {data}) {
            const {allCars} = proxy.readQuery({
                query: FETCH_All_CARS_QUERY
            })
            proxy.writeQuery({
                query: FETCH_All_CARS_QUERY,
                data: {
                    allCars: [data['createCar'], ...allCars]
                }
            })
        }
    }
    )

    const dispatch = useDispatch()
    const history = useHistory()

    const setIsCreated = (is) => dispatch(setCreated(is))

    const onFileLoadHandler = e => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        // formData.append("file", e.target.files[0])
        dispatch(setCarDoc(formData))
    }

    const updateCarHandler = update => {
        dispatch(setCar(update))
    }

    const createCarHandler = async () => {
        const resDocs = await dispatch(createFilesArray(car.docs))
        const resPhotos = await dispatch(createFilesArray(car.photos))
        const newCar = transportCarToServer({...car, photos: resPhotos, docs: resDocs})
        await createCar({
            variables: {
                createCarInput: newCar
            }
        },
    )
        dispatch(setCreated(true))
        dispatch(getUserCars(car.ownerId))
        // dispatch(createCarInGraphQL(car))
    }
    // const createCarHandler = () => dispatch(createCar(car))

    const stepBack = () => {
        history.push("/car/create/3")
    }

    const goToMain = () => {
        setIsCreated(false)
        history.push("/")
    }

    if(isCreated) return <CarSuccess goToMain={goToMain} />

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={stepBack}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 4 из 4</div>
                <h1 className="register__header__title">Фото документов</h1>
            </div>
            <form className="register__form">
                <p className="text-desc">СТС или ПТС автомобиля, полис ОСАГО,
                    полис КАСКО (если есть)</p>
                <div className="form-section-wrapper">
                    <div className="file-loader-container">
                        <input className="file-loader__input" type="file" onChange={onFileLoadHandler}/>
                        <img src={cloud} />
                        <div className="file-loader__title">Перетащите или <span style={{color: "#61A199"}}>выберите файл</span></div>

                    </div>
                </div>
            </form>
            <div className="register__footer  lineTop">
                <button
                    onClick={createCarHandler}
                    // disabled={
                    //     birthDate === ''
                    //     || datePassport === ''
                    //     || dateLicence === ''
                    //     || name === ''
                    //     || mail === ''
                    //     || phone === ''
                    //     || numPassport === ''
                    //     || orgPassport === ''
                    //     || codePassport === ''
                    //     || numLicence === ''
                    //     || password === ''
                    //     || repeatPassword === ''
                    // }
                >
                    {isLoading
                        ?
                        <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                            // timeout={3000} //3 secs
                        />
                        : <span>Продолжить</span>

                    }
                </button>
            </div>
            {/*{servererror &&*/}
            {/*<div className="server-error">*/}
            {/*    <span>Не удалось продолжить регистрацию. Попробуйте ещё раз</span>*/}
            {/*</div>}*/}
        </main>
    )
}

