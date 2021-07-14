import React from "react";
import {connect} from "react-redux";


class BookingsContainer extends React.Component {
    render() {
        return <div>Booking</div>
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(BookingsContainer)
