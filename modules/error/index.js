import React,{ Component } from 'react'
import Router from 'next/router'
class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div className='error'>
                <h1>404</h1>
                <style jsx>{`
                    .error{
                        display:flex;
                        justify-content: center;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Error

