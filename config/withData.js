import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../config/store'

export default function(Component){
    class Auth extends React.Component {
        constructor(props){
            super(props)
            this.store = initStore()
        }
        componentDidMount(){
            // const url = document.location.pathname;
            // this.setState({
            //     url: url
            // })
        }
        render(){
            return(
                <Provider store={this.store}>
                    <Component url={'/'} />
                </Provider>
            )
        }
    }

    return Auth
}