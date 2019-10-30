import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../config/store'

export default function(Component){
    class Auth extends React.Component {
        static async getInititalProps (ctx){
        }
        constructor(props){
            super(props)
            this.store = initStore()
            this.state = {}
        }
        async UNSAFE_componentWillMount () {
            const url = window.document.location.pathname;
            const win = window;
            this.setState({
                url,
                win
            })
        }
        render(){
            return(
                <Provider store={this.store}>
                    <Component url={this.state.url} win={this.state.win}/>
                </Provider>
            )
        }
    }

    return Auth
}