import React from "react";
import {Register} from "./Register";
import {connect} from "react-redux";
import {RegStep2} from "./RegStep2";
import {RegStep3} from "./RegStep3";
import {RegSuccess} from "./RegSuccess";
import {useHistory} from "react-router-dom";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {signUp} from "../redux/action/auth";


class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {step: props.state.isAuthorized ? 4 : 1, user: {}, photo: "", docs: [], error: props.state.error || ""}
    }

    confirmUserData = user => {
        this.setState({
            user: {...user}
        })
    }

    confirmUserDocs = docs => this.setState({docs})

    confirmUserPhoto = photo => this.setState({photo})

    stepForward = () => {
        this.setState({step: this.state.step += 1});
    }
    stepBack = () => {
        this.setState({step: this.state.step -= 1});
    }

    setPhoto = photo => {}

    register = () => {
        this.props.signUp({...this.state.user, ...this.state.photo, ...this.state.docs});
        // this.setState({error: "Не удалось продолжить регистрацию. Попробуйте ещё раз"});
        // this.stepForward();
    }

    componentDidMount() {
        // if(this.props.state.isAuthorized) {
        //     this.setState({step: 4})
        // }
    }



    render() {
        if(this.props.state.isAuthorized) return <RegSuccess/>

        switch (this.state.step) {
            case 1:
                return <Register
                    stepForward={this.stepForward}
                    confirmUserData={this.confirmUserData}
                    initialState={this.state.user}
                />
            case 2:
                return <RegStep2
                    stepBack={this.stepBack}
                    stepForward={this.stepForward}
                    confirmUserPhoto={this.confirmUserPhoto}
                    initialState={this.state.photo}
                />
            case 3:
                return <RegStep3
                    stepBack={this.stepBack}
                    stepForward={this.stepForward}
                    confirmUserDocs={this.confirmUserDocs}
                    register={this.register}
                    initialState={this.state.docs}
                    error={this.props.state.error}
                />
            // case 4:
            //     return <RegSuccess/>
            default:
                return null
        }
    }

}

const mapStateToProps = state => ({
    state: state.auth
})

// const mapDispatchToProps = {}


export default connect(mapStateToProps, {signUp})(RegisterContainer)
