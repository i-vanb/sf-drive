import React, {useEffect, useState} from "react"
import "react-datepicker/dist/react-datepicker.css";
import back from "../../src/img/back.svg"
import Image from "next/image"

import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {setUserPhoto} from "../../src/redux/action/user";
import {CameraFeed} from "../../src/components/cameraFeed";
import {blobToBase64} from "../../src/utils/blobToString";
import {withAuth} from "../../src/withAuth/withAuth";


const Register = () => {
    const photo = useSelector(state => state.user.photo)
    const [isCameraOn, setIsCameraOn] = useState(false)

    const dispatch = useDispatch();
    const history = useRouter()

    const uploadImage = async file => {
        const newFile = new File([file], "ava.png")
        dispatch(setUserPhoto(newFile))
    };

    const showImageHandler = async image => await blobToBase64(image)

    const nextHandler = () => {
        history.push('/register/3')
    }

    const backHandler = () => {
        history.push('/register/1')
    }

    const getImage = file => URL.createObjectURL(file)

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__step-back" onClick={backHandler}>
                    <Image src={back}/>
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
                        ? <img src={getImage(photo)} style={{maxWidth: '100%', maxHeight: '100%', display: 'inline-block'}}/>
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

export default ()=>withAuth(Register)
