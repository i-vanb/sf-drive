import React, {useEffect} from "react";
import {connect} from "react-redux";
import icon from "../img/undraw_electric_car.svg";
import {NavLink} from "react-router-dom";
import {getUserCars} from "../redux/action/user";


export const CarsContainer = props => {
    const {auth, user} = props
    // if(!auth.userID) return null
    useEffect(()=>{

    }, [])


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
                    <NavLink to="/car/create">
                        Добавить автомобиль
                    </NavLink>
                </div>
            </div>
        </div>
    )
}




// class CarsContainer extends React.Component {
//
//     componentDidMount() {}
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {}
//
//     render() {
//         return (
//             <div className="car">
//                 <div className="content-container">
//                     <img src={icon}/>
//                     <h2>
//                         Зарабатывайте на своём
//                         автомобиле
//                     </h2>
//                     <p>Сдавайте автомобиль в аренду и получайте заработок.</p>
//                     <div className="car__footer">
//                         <NavLink to="/car/create">
//                             Добавить автомобиль
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, {getUserCars})(CarsContainer)
