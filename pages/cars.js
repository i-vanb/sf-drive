import React, {useEffect} from "react";
import {connect} from "react-redux";
import icon from "../src/img/undraw_electric_car.svg";
import {Link} from "../src/utils/Link";
import {getUserCars} from "../src/redux/action/user";
import {withNoAuth} from "../src/withAuth/withAuth";


export const Cars = props => {
    const {auth, user} = props

    useEffect(()=>{}, [])

    return (
        <div className="car">
            <div className="content-container">
                {user.cars.length
                    ?
                    <>
                        <h2>
                            Мои автомобили
                        </h2>
                        <div className="user-cars__container">
                            {user.cars.map((e,i)=>{
                                return(
                                    <div key={i} className="user-cars__item">
                                        <div className="user-cars__item__photo">
                                            <img src="/cars/img/imgCar1.png"/>
                                        </div>
                                        <div className="user-cars__item__desc">
                                            <div>{e.mark} {e.model}</div>
                                            <div>{e.price} руб в сутки</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                    :
                    <>
                        <img src={icon}/>
                        <h2>
                            Зарабатывайте на своём
                            автомобиле
                        </h2>
                        <p>Сдавайте автомобиль в аренду и получайте заработок.</p>
                    </>
                }
                <div className="car__footer">
                    <Link to="/car/create">
                        Добавить автомобиль
                    </Link>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user
})

export default ()=>withNoAuth(connect(mapStateToProps, {getUserCars})(Cars))
