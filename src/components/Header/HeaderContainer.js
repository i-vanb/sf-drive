import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
// import {setAuthUserData} from "../../redux/reducer/auth";

class HeaderContainer extends React.Component {

    async componentDidMount() {
        // const response = await fetch('http://localhost:8000/auth/me', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         mail, password: psw
        //     })
        // })
    }

    render() {
        return <Header {...this.props} />
    }
}


// const mapStateToProps = state => ({})
// export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
