import React from "react";
import {connect} from "react-redux";


class CarsContainer extends React.Component {
    render() {
        return <div>Cars</div>
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(CarsContainer)
