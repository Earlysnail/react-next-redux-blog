import Home from '../modules/home'
import withData from '../config/withData'

export  default withData((props) => {
    return (
        <Home {...props}></Home>
    )
})




// import React, { Componnent } from 'react'

// class Login extends Components {
//     constructor(props){
//         super(props)
//         this.state = {
//         }
//     }
//     render() {
//         return (
//             <div>signIn</div>
//         )
//     }
// }