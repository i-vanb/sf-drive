import React from "react";
import {connect} from "react-redux";
import icon from "../img/undraw_electric_car.svg";
import {NavLink} from "react-router-dom";


class CarsContainer extends React.Component {

    componentDidMount() {}

    shouldComponentUpdate(nextProps, nextState, nextContext) {}

    render() {
        return (
            <div className="car">
                <div className="content-container">
                    <img src={icon}/>
                    <h2>
                        Зарабатывайте на своём
                        автомобиле
                    </h2>
                    <p>Сдавайте автомобиль в аренду и получайте заработок.</p>
                    <div className="car__footer">
                        <NavLink to="/car/create">
                            Добавить автомобиль
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(CarsContainer)
