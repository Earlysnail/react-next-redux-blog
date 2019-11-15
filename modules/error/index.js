import React, { Component } from 'react'
import Router from 'next/router'
const img1 = "../../static/1.jpg";
const img2 = "../../static/2.jpg";
const img3 = "../../static/3.jpg";
const img4 = "../../static/4.jpg";
class Error extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const array = [
            {
                name: '马文涛',
                img: img1,
                desc: '前端工程师'
            }, {
                name: '张璞',
                img: img2,
                desc: '软件工程师'
            }, {
                name: '孙立伟',
                img: img3,
                desc: '安卓工程师'
            }, {
                name: '陈少波',
                img: img4,
                desc: '软件工程师'
            }
        ]
        return (
            <div className='error'>
                <div className="manage">
                <div className="menber">
                    {
                        array.map((item, index) => {
                            return (
                                <div id="wrap">
                                    <div className="head">
                                        <div className="img">
                                            <img src={item.img}></img>
                                        </div>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="desc">{item.desc}</div>
                                </div>)
                        })
                    }
                </div>
                <div className="project">
                    <div className="sub-header">
                        <div><i>@</i>开发社区</div>
                    </div>
                    <a target="_blank" href="http://www.baidu.com">
                        <div className="item">
                            <div className="logo">
                                <img src={array[3].img} />
                                <span className="title">Github</span>
                            </div>
                            <div className="desck">
                                <span style={{ padding: '0 .1rem' }}>这是一个前端项目</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <style jsx>{`
                    .error{
                        display:flex;
                        justify-content: center;
                    }
                    .menber{
                        display:flex;
                        justify-content: center;
                    }
                    #wrap{
                        width: 3rem;
                        margin: .3rem .1rem;
                        background-color: #f5f8fa;
                        border: 1px solid #e4ecf3;
                        border-radius: 4px;
                        text-align: center;
                        transition: all .3s ease;
                    }
                    #wrap:hover {
                        transform: translateY(-6px);
                        -webkit-transform: translateY(-6px);
                        -moz-transform: translateY(-6px);
                        box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
                        -webkit-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3);
                        -moz-box-shadow: 0 26px 40px -24px rgba(0,36,100,.3)
                    }
                    .head{
                        padding: .2rem .1rem;
                    }
                    .img{
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        overflow: hidden;
                        display: inline-block;
                    }
                    .desc{
                        background-color: #fff;
                        color: #919191;
                        line-height: 60px;
                        height: 60px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 0 20px;
                    }
                    .project{
                        overflow: hidden;
                        background: #fff;
                        margin: 20px 30px;
                        padding-bottom: 20px;
                    }
                    .project>div{
                        padding: 12px 0 0 2.1%;
                        font-size: 18px;
                    }
                    .item{
                        border-radius: 6px;
                        background: #fff;
                        padding: 10px;
                        width: 20%;
                        min-width: 200px;
                        margin: 22px 0 0 2.1%;
                        float: left;
                        overflow: hidden;
                        border: 1px solid #e4ecf3;
                        box-shadow: 1px 2px 3px #f2f6f8;
                        transition: all .3s ease;
                    }
                    .item .title{
                        font-size: 14px;
                        font-weight: 700;
                        color: #3273dc;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding: 0 .1rem;
                    }
                    .item:hover{
                        transform: translateY(-6px);
                        -webkit-transform: translateY(-6px);
                        -moz-transform: translateY(-6px);
                        box-shadow: 1px 2px 3px rgba(0,36,100,.3);
                        -webkit-box-shadow: 1px 2px 3px rgba(0,36,100,.3);
                        -moz-box-shadow: 1px 2px 3px rgba(0,36,100,.3);
                    }
                    .logo{
                        height: 40px;
                        position: relative;
                        font-size: 14px;
                        font-weight: 700;
                        color: #3273dc;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding: 0 .1rem;
                    }
                    .logo img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        vertical-align: middle;
                    }
                    .desck{
                        color: gray;
                        font-size: 12px;
                        padding-top: 10px;
                        height: 35px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                `}
            </style>
            </div >
        )
    }
}

export default Error

