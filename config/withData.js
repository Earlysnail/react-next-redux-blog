import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../config/store'

export default function(Component){
    class Auth extends React.Component {
        constructor(props){
            super(props)
            this.store = initStore()
        }
        render(){
            return(
                <Provider store={this.store}>
                    <Component/>
                </Provider>
            )
        }
    }

    return Auth
}