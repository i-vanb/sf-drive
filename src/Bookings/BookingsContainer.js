import React from "react";
import {connect} from "react-redux";


class BookingsContainer extends React.Component {
    render() {
        return <div>Booking<Test /></div>
    }
}

const mapStateToProps = state => ({
    state: state.auth
})

export default connect(mapStateToProps, {})(BookingsContainer)



const Test = () => {
    testfunc()

    return<div></div>
}
const testfunc = async () => {
    const promise = new Promise(((resolve, reject) => {
        resolve('returning')
    }))
    console.log(promise)
    // const array1 = [1,2,3].map(async (e, i) => {
    //     new Promise((resolve => {
    //         setTimeout(()=>resolve, 5000)
    //     }))
    //     return `response${e}`
    // })
    // console.log(array1)
}
