import React, { Component } from 'react'

class PlayImgBut extends Component {

    handleSubmit = () => {
        if (this.props.onSubmit) {
            if (this.props.value == '>') {
                this.props.onSubmit(1);
            } else {
                this.props.onSubmit(0);
            }
        }
    }

    render() {
        return (
            <div>
                <a href='#'><div id={this.props.id} onClick={this.handleSubmit}>{this.props.value}</div></a>
                <style jsx>
                    {`
                    a{
                        text-decoration: none;
                        color: black;  
                    }
                    #leftB,#rightB{
                        font-size: 80px;
                        position: absolute;
                        top: 35%;
                        color: black;
                    }
                    #leftB:hover,#rightB:hover{
                        background-color: lightgray;
                        border-radius:5px;
                    }
                    #leftB:active,#rightB:active{
                        background-color: darkgray;
                        border-radius: 5px;
                    }
                    #leftB {
                        left: 5%;
                    }
                    #rightB{
                        right: 5%;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default PlayImgBut