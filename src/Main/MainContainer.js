import React from "react";
import {connect} from "react-redux";
import MainUnAuth from "./Main";
import SearchCarContainer from "../SearchCar/SearchCarContainer";


class MainContainer extends React.Component {


    render() {
        if(this.props.state.isAuthorized) return <SearchCarContainer />
        return <MainUnAuth />
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(MainContainer)
