import React, { Component } from 'react'

class StartBut extends Component {
    handleStart = () => {
        if (this.props.onStart) {
            this.props.onStart();
        }
    }

    addPlayTime = (flag) => {
        if (this.props.reviseTime) {
            if (this.props.nowTime != 5000) {
                this.props.reviseTime(+500)
            }
        }
    }

    reducePlayTime = () => {
        if (this.props.reviseTime) {
            if (this.props.nowTime != 0) {
                this.props.reviseTime(-500)
            }
        }
    }

    render() {
        return (
            <div className="startBut" >
                <span className="controlTime">当前图片切换时间间隔为</span>
                <span className="controlTime" id="showTime">{this.props.nowTime / 1000}</span>
                <span className="controlTime">秒</span>
                <a href="#" id="reduce" onClick={this.reducePlayTime}><span className="controlTime" id="controlReduce">-0.5s</span></a>
                <a href="#" id="add" onClick={this.addPlayTime}><span className="controlTime" id="controlAdd">+0.5s</span></a>
                <div id='isPlay' onClick={this.handleStart}>
                    <a href='#'>{this.props.isStart ? '开始' : '暂停'}</a>
                </div>

                <style jsx>
                    {`
                    .startBut{
                        position: relative;
                    }
                    a{
                        text-decoration: none;
                        color: black;
                    }
                    #isPlay{
                        position: absolute;
                        display: inline-block;
                        margin-left: 200px;
                        font-size: 20px;
                        border: solid 3px deepskyblue;
                        border-radius: 3px;
                        width: 1rem;
                        height: 40px;
                        line-height: 40px;
                        }    
                        #isPlay:hover{
                            background-color: deepskyblue;
                        }
                        #isPlay:active{
                            background-color: dodgerblue;
                        }
                        .controlTime{
                            word-spacing: 10px;
                            font-size: 30px;
                            margin-bottom: 5px;
                        }
                        #controlAdd,#controlReduce{
                            display: inline-block;
                            border: solid 2px black;                                
                            border-radius: 5px/5px;
                            width: 90px;
                        }
                 `}
                </style>
            </div>
        )
    }
}

export default StartBut