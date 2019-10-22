import React, { Component } from 'react'
import { HeaderBar } from '../../components'
import { style } from '../../components/styles'
class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <main>
                <HeaderBar></HeaderBar>
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