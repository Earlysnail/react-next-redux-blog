import React, { Component } from 'react'
import Router from 'next/router'

const img1 = '../../static/1.jpg'
const img2 = '../../static/2.jpg'
const img5 = '../../static/5.jpg'
const onePage = '../../static/onePage.jpg'
const twoPage = '../../static/twoPage.jpg'
const thirdPage = '../../static/thirdPage.jpg'
const bgPage1 = '../../static/background1.jpg'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			position1: 0,
			position2: 0
		}
	}
	componentDidMount() {
		const win = this.props.win
		win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img1, 'position1') })
		win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img2, 'position2') })
	}

	componentWillUnmount() {
		const win = this.props.win
		win.removeEventListener('scroll', this.parallaxEffect(this.refs.img, 'position1'))
		win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img2, 'position2') })
	} Ï
	parallaxEffect = (dom, pos) => {
		const win = this.props.win
		var domHeight = dom && dom.offsetHeight || 700;     																		//dom元素的高度
		var windowHeight = win.innerHeight;  																			//窗口的可见高度
		var domOffsetTop = dom && dom.offsetTop || 900;																					//dom元素距离顶部高度
		var scrollTop = win.document.documentElement.scrollTop;    								//滚动条滚动的高度
		var startScrollTop = scrollTop + windowHeight;														//滚动条滚动的高度 + 窗口的可见高度
		var endScrollTop = scrollTop - domHeight;    														//滚动条滚动的高度 - dom元素的高度
		if ((startScrollTop > domOffsetTop) && (endScrollTop < domOffsetTop)) {		//判断dom元素是否在可视区域
			var visibleScrollValue = startScrollTop - endScrollTop;        					//窗口的可见高度 + dom元素的高度
			var pixelScrolled = scrollTop - (domOffsetTop - windowHeight);    			//滚动条滚动的高度 - 窗口的可见高度
			var percentScrolled = pixelScrolled / visibleScrollValue;
			var deltaTopScrollVal = 0;
			deltaTopScrollVal = percentScrolled * 100;   						 								//向下滚动
			this.setState({
				[pos]: deltaTopScrollVal
			})
		}
	}
	render() {
		return (
			<div className='home'>
				<div className="onePage"></div>
				<div className="pageContent">
					<h1 className="mainName">计算机精英协会</h1>
					<h1 className="scieName">Coding change the World</h1>
					<span className="btn1" style={{ backgroundColor: "#2ea2a2" }}>加入我们</span>
					<span className="btn1" style={{ border: "3px solid #2ea2a2" }}>我是成员</span>
				</div>
				<div className="backgroundImage1" ref="img1">
					<div className="shadow"></div>
				</div>
				<div className="header">
					<h1 style={{ height: '2rem', textAlign: 'center' }}>天津科技大学</h1>
				</div>
				<div className="backgroundImage2" ref="img2">
					<div className="shadow"></div>
				</div>
				<div className="header">
					<h1 style={{ height: '2rem', textAlign: 'center' }}>计算机精英协会</h1>
				</div>
				<style global jsx>{`
                body, h1{
									margin: 0;
									padding: 0;
								}
								.onePage{
									position: relative;
									background: url(${bgPage1}) no-repeat;
									overflow: hidden;
									background-size: cover;
									height:${this.props.win && this.props.win.innerHeight || 1000}px;
									width:100%;
									z-index: 1;
								}
								.onePage:after{
									content:'';
									width:100%;
									height:100%;
									position: absolute;
									left:0;
									top:0;
									background: inherit;
									filter: blur(2px);
									z-index: 2;
								}
								.pageContent{
									position: absolute;
									left: 10px;
									right: 10px;
									top: 30%;
									text-align: center;
									z-index: 11;
								}
								.pageContent .mainName{
									margin-bottom: .1rem;
									color: #ffffff;
									font-size: 70px;
								}
								.pageContent .scieName{
									margin-bottom: .5rem;
									color: #b1acac;
									fontSize: 50px;
								}
								.pageContent .btn1{
									display: inline-block;
									height: .4rem;
									line-height: .4rem;
									width: 1.5rem;
									font-size: 30px;
									margin: .1rem .5rem;
									padding: .1rem .2rem;
									border-radius: 30px;
									color: #FFF;
									cursor: pointer;
									z-index: 11;
								}
								.backgroundImage1{
									background: url(${img5}) center center no-repeat;
									box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-webkit-box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-moz-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-o-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-ms-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									background-attachment: fixed;
									background-position:50% ${this.state.position1}%;
								}
								.backgroundImage1 .shadow{
									width:100%;
									height:7rem;
									overflow:hidden;
									margin:auto;
								}
								.backgroundImage2{
									background: url(${img5}) center center no-repeat;
									box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-webkit-box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-moz-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-o-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									-ms-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
									background-attachment: fixed;
									background-position:50% ${this.state.position2}%;
								}
								.backgroundImage2 .shadow{
									width:100%;
									height:7rem;
									overflow:hidden;
									margin:auto;
								}
                `}
				</style>
			</div>
		)
	}
}

export default Home