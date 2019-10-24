import React, { Component } from 'react'
import PlayImgBut from './PlayImgbut'
import PlayImage from './PlayImage'
import PlayPoints from './PlayImgPoints'
import StartBut from './startBut'

class PlayImgApp extends Component {
    constructor() {
        super();
        this.state = {
            nowImgNumber: 0,
            isStart: false,
            playTime: 2000
        }
    }
    componentDidMount() {
        this.change = setInterval(() => this.changeNum(), this.state.playTime);
    }
    handleStart() {
        if (this.state.isStart) {
            this.change = setInterval(() => this.changeNum(), this.state.playTime);
        } else {
            clearInterval(this.change);
        }
        this.setState({
            isStart: !this.state.isStart,
        })
    }
    changeNum() {
        if (this.state.nowImgNumber == 5) {
            this.setState({
                nowImgNumber: 0,
            })
        } else {
            this.setState({
                nowImgNumber: this.state.nowImgNumber + 1,
            })
        }
    }

    handleSubmit = (flag) => {
        clearInterval(this.change);
        if (flag == 1) {
            if (this.state.nowImgNumber == 5) {
                this.setState({
                    nowImgNumber: 0,
                    isStart: false,
                })
            } else {
                this.setState({
                    nowImgNumber: this.state.nowImgNumber + 1,
                    isStart: false,
                })
            }
        } else {
            if (this.state.nowImgNumber == 0) {
                this.setState({
                    nowImgNumber: 5,
                    isStart: false,
                })
            } else {
                this.setState({
                    nowImgNumber: this.state.nowImgNumber - 1,
                    isStart: false,
                })
            }
        }
        this.change = setInterval(() => this.changeNum(), this.state.playTime);
    }

    handlePoint = (idNum) => {
        clearInterval(this.change);
        this.setState({
            nowImgNumber: idNum,
            isStart: false,
        })
    }

    handlePointStart = () => {
        this.change = setInterval(() => this.changeNum(), this.state.playTime);
    }

    componentWillUnmount() {
        clearInterval(this.change);
    }
    reviseTime = (time) => {
        clearInterval(this.change);
        this.setState({
            playTime: this.state.playTime + time,
        })
        this.change = setInterval(() => this.changeNum(), this.state.playTime + time);
    }

    render() {
        return (
            <div id='ImgApp'>
                <PlayImage num={this.state.nowImgNumber} />
                <PlayImgBut id='leftB' value='<' onSubmit={this.handleSubmit} />
                <PlayImgBut id='rightB' value='>' onSubmit={this.handleSubmit} />
                <PlayPoints num={this.state.nowImgNumber} onPoint={this.handlePoint} start={this.handlePointStart} />
                <StartBut onStart={this.handleStart.bind(this)} isStart={this.state.isStart} reviseTime={this.reviseTime} nowTime={this.state.playTime} />
                <style jsx>{`
                    #ImgApp{
                        border-radius: 5px;
                        text-align: center;
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
                `}</style>
            </div>
        )
    }
}

export {
    PlayImgApp
}