import React, { Component } from 'react'
import { HeaderBar } from '../../components'
import { style } from '../../components/styles'
class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    async componentWillMount(){
        this.doSignIn()
    }
    doSignIn = () => {
        // let username = await localStorage.getItem('username');
        // let token = await localStorage.getItem('token');
        // if(this.props.authInfo && this.authInfo.token){
            
        // }
    }
    render(){
        return(
            <main>
                <HeaderBar url={this.props.url}></HeaderBar>
                {
                    this.props.children
                }
                <style>
                    {style()}
                </style>
            </main>
        )
    }
}


export {
    Layout
}