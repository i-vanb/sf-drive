import React from "react";
import {connect} from "react-redux";
import Footer from "../components/Footer";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import {SearchCar} from "./SearchCar";
import {carList} from "./dumpCarsData";
import {CarItem} from "./CarItem";
import {CarDetail} from "./CarDetail";


class SearchCarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            dateBegin: "",
            dateFinish: "",
            type: "",
            startDate: null,
            endDate: null,
            detail: false,
            carItem: {}
        }

    }

    backFromDetailHandler = () => {
        this.setState({carItem: {}, detail: false})
    }

    render() {
        if(this.state.detail) {

            return <CarDetail {...this.state.carItem} onBack={this.backFromDetailHandler}/>
        }


        return (
            <>
                <SearchCar/>
                <div className="cars">
                    {carList.map(e => <a key={e.id} onClick={()=> {this.setState({detail: true, carItem: {...e}})}}>
                        <CarItem {...e} /></a>)}
                </div>

                {/*<section>*/}
                {/*    <div className="content-container">*/}
                {/*        <h1>Арендуйте автомобиль</h1>*/}
                {/*        <form className="search_car__form">*/}
                {/*            <div className="form_content">*/}
                {/*                <input placeholder="" className="form_input"/>*/}
                {/*                <span>Местоположение</span>*/}
                {/*            </div>*/}
                {/*            <div className="form_content">*/}
                {/*                /!*<img src={calendarIcon} className="calendarIcon"/>*!/*/}
                {/*                /!*<input placeholder="" className="form_input"/>*!/*/}
                {/*                <DatePicker className="search_car__form__datePicker"*/}
                {/*                            selectsRange={true}*/}
                {/*                            startDate={this.state.dateRange[0]}*/}
                {/*                            endDate={this.state.dateRange[1]}*/}
                {/*                            onChange={update => this.setState({dateRange: update})}*/}
                {/*                            isClearable={true}*/}
                {/*                />*/}

                {/*                <span>Период аренды</span>*/}
                {/*            </div>*/}
                {/*            <div className="form_content">*/}
                {/*                <input placeholder="" className="form_input"/>*/}
                {/*                <span>Категория</span>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*    <h2>Рекомендуем поблизости</h2>*/}
                {/*</section>*/}
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(SearchCarContainer)
