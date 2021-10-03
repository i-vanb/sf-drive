import React from "react";
import {connect} from "react-redux";


class MessagesContainer extends React.Component {
    render() {
        return <div>Messages</div>
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(MessagesContainer)
