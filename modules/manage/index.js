import React, { Component } from 'react'
const img1 = "../../static/1.jpg";
const img2 = "../../static/2.jpg";
const img3 = "../../static/3.jpg";
const img4 = "../../static/4.jpg";
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
	}, {
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
	}, {
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

class Manage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		var arr = [];
		var newArray = [];
		array.forEach((ele, index) => {
			arr.push(ele);
			if ((index + 1) % 4 == 0) {
				newArray.push(arr);
				arr = [];
			}
		})
		var list = [
			{
				year: '2018',
				desc: '18届毕业生',
				members: newArray,
				color: '#3564f3',
				mark: false
			}, {
				year: '2019',
				desc: '19届毕业生',
				members: newArray,
				color: '#345344',
				mark: false
			}, {
				year: '2020',
				desc: '20届毕业生',
				members: newArray,
				color: '#634343',
				mark: false
			},
		]
	}
	handleShow = (list,index) => {
		list[index].mark = true;
		this.setState({
			list
		})
	}
	handleQuitShow = (list, index) => {
		list[index].mark = false;
		this.setState({
			list
		})
	}
	render() {
		const { list } = this.state
		return (
			<div className="manage">
				<div className="timeline">
					<ul>{
						list.map((element, listKey) => {
							return (
								<li key={listKey}>
									<div className="bullet" style={{ background: `${element.color}` }}></div>
									<div className="time">{element.year}</div>
									<div className="descx">
										<h3>{element.desc}</h3>
										<div className="people">
											{
												element.members.map((ele, elementKey) => {
													return (
														element.mark || elementKey == 0 ? <div className="row" key={elementKey}>
															{
																ele.map((item, itemKey) => {
																	return (
																		<div id="wrap" key={itemKey}>
																			<div className="head">
																				<div className="img">
																					<img src={item.img}></img>
																				</div>
																				<h3>{item.name}</h3>
																			</div>
																			<div className="desc" style={{ display: "block" }}>{item.desc}</div>
																		</div>
																	)
																})
															}

														</div>
															: ''
													)
												})
											}
											{
												element.mark ? <div style={{ float: 'right', cursor: 'pointer' }} onClick={this.handleQuitShow(list,listKey)}>{'<<<<<<'}</div> : <div style={{ float: 'right', cursor: 'pointer' }} onClick={this.handleShow(list,listKey)}>>>>>>></div>
											}
											{/* {
														<div style={{display: "flex", alignItems: 'center'}}><span>》》》</span></div>
													} */}
										</div>
									</div>
								</li>
							)
						})
					}
					</ul>
				</div >
				<style jsx>{`
								.manage{
									padding-top: .7rem;
									padding-left: .3rem; 
								}
                .timeline ul{
                    padding: .1rem 0 0 .2rem;
                    position: relative;
                }
                .timeline ul::before{
                    content: ' ';
                    height: 100%;
                    width: .01rem;
                    background-color: grey;
                    position: absolute;
                    top: 0;
                    left: .35rem;
                    z-index: -1;
                }
                .timeline li > div{
										display: inline-block;
                    margin: .1rem 0;
                    vertical-align: top;
                  }
                  .timeline .bullet {
                    width: .3rem;
                    height: .3rem;
                    box-sizing: border-box;
                    border-radius: 50%;
                    background: #3564f3;
                    z-index: 1;
                    margin-right: .1rem;
                  }
                  .timeline .time {
										width: 90%;
										font-size: .2rem;
										padding-left: .1rem;
                  }
                  .timeline .descx {
										padding-left: .4rem;
                  }
                  .timeline h3 {
                    font-size: 0.09rem;
                    font-weight: 400;
                    margin: 0;
                  }
                  
                  .timeline h4 {
                    margin: 0;
                    font-size: 0.07rem;
                    font-weight: 400;
                    color: grey;
									}
									.timeline .people{
										height: auto;
										margin: .1rem 0;
										transition: height 3s ease;
									}
									.timeline .people .row{
										display: flex;
										justify-content: center;
                    width: 1000px;
									}
                  .timeline .people a{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                  }
                }
                
                .credits, .video{
                  position: absolute;
                  bottom:10px;
                  color: grey;
                  font-size: 100%;
                  text-decoration: underline;
                }
                
                .credits {
                  left: 10px;
                }
                
                .video{
                  right: 10px;
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

export default Manage

