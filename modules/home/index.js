import React, { Component } from 'react'
import Router from 'next/router'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='home'>
                <div className='creator'>
                    <div className='avatar'>
                    </div>
                    <div className='national'>
                        <button type='button' onClick={() => { Router.push('/signIn') }}>signIn</button>
                    </div>
                    <div className='national'>
                        <button type='button' onClick={() => { Router.push('/error') }}>error</button>
                    </div>
                </div>
                <style global jsx>{`
                body{
                    margin: 0;
                    padding: 0;
                }
                `}
                </style>
            </div>
        )
    }
}

export default Home