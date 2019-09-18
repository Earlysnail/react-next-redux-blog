import React,{ Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className='home'>
                my blog
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