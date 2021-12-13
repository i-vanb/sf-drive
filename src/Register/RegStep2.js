import React, {useEffect, useState} from "react"
import "react-datepicker/dist/react-datepicker.css";
import back from "../img/back.svg"

import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {setUserData, setUserPhoto} from "../redux/action/user";
import {CameraFeed} from "../components/cameraFeed";
import {blobToBase64} from "../utils/blobToString";
import {getImageTEST} from "../redux/action/car";
import * as buffer from "buffer";


export const RegStep2 = () => {
    const photo = useSelector(state => state.user.photo)
    const [isCameraOn, setIsCameraOn] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        // console.dir(photo)
    }, [photo])

    // const uploadImage = async file => {
    const uploadImage = async file => {
        console.log(file)
        // file.arrayBuffer().then(buffer => {
        const newFile = new File([file], "ava.png")
        //     console.log(newFile)
        // })
        // console.log(new File([file], 'ava.png'))

        //
        // console.dir(newFile)


        // const formData = new FormData();
        // formData.append('file', file);

        // const newFile = await blobToBase64(file)
        // dispatch(setUserPhoto(formData))
        dispatch(setUserPhoto(newFile))
    };

    // const takePhotoHandler = () => {
    //     isCameraOn && camera.takeSnapshot()
    // }

    const showImageHandler = async image => await blobToBase64(image)


    const nextHandler = () => {
        // some checking
        history.push('/register/3')
    }

    const backHandler = () => {
        // some checking
        history.push('/register/1')
    }

    const getImage = file => URL.createObjectURL(file)


    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={backHandler}>
                    <img src={back}/>
                    <span>Назад</span>
                </div>
                <div className="register__header__pageNumber">Шаг 2 из 3</div>
                <h1 className="register__header__title">Загрузите селфи</h1>
            </div>
            <form className="register__form photo_input">
                <h2 className="register__title">Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.</h2>
                {isCameraOn
                    ? <CameraFeed sendFile={uploadImage} toggleCamera={setIsCameraOn} isCamera={isCameraOn}
                                  photo={photo} />
                    : photo
                        // ? <img src={`data:${photo.mimetype};base64,${Buffer.from(photo.buffer).toString('base64')}`} />
                        ? <img style={{maxWidth: '100%', maxHeight: '100%', display: 'inline-block'}} src={getImage(photo)} />
                        // ? <img src={URL.createObjectURL(photo)} />
                        // ? <div className="imageWrapper"><span className="no-photo" /></div>
                        : <div className="imageWrapper"><span className="no-photo" /></div>
                }
                {!isCameraOn &&
                    <>
                        <div className="btn__add-file" onClick={()=>setIsCameraOn(true)}>Сделать фото</div>
                        <div className="btn__add-file">Загрузить фото
                            <input type="file" onChange={e=>uploadImage(e.target.files[0])} />
                        </div>
                    </>}
                {/*<div id="videoWrapper" className="imageWrapper">*/}
                {/*    {!isCameraOn && !photo*/}
                {/*        ? <span className="no-photo" />*/}
                {/*        : */}
                {/*    }*/}
                {/*</div>*/}
                {/*<div className="btn__add-file" onClick={()=>setIsCameraOn(false)}>Загрузить*/}
                    {/*<label className="">*/}
                    {/*    <input type="file"*/}
                    {/*           onChange={(e) => {*/}
                    {/*               const binaryData = [];*/}
                    {/*               binaryData.push(e.target.files[0]);*/}
                    {/*               dispatch(setUserData({photo: URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))}));*/}
                    {/*           }}*/}
                    {/*    />*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div className="btn__add-file" onClick={()=>setIsCameraOn(true)}>Камера</div>*/}
                {/*<div className={`btn__add-file${isCameraOn ? '':' inactive'}`} onClick={uploadImage}>Сделать фото</div>*/}
            </form>
            <div className="register__footer">
                <button onClick={nextHandler}>
                    <span>Продолжить</span>
                </button>
            </div>
        </main>
    )
}

