import React from 'react';
import {connect} from 'react-redux';
import SearchCarContainer from "../src/SearchCar/SearchCarContainer";
import MainUnAuth from "../src/Main/Main";

const Home = props => {
    if(props.state.isAuthorized) return <SearchCarContainer />
    return <MainUnAuth />
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(Home)
