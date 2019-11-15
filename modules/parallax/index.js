
import React, { Component } from 'react'

const img1 = '../../static/1.jpg'
const img5 = '../../static/5.jpg'
const img2 = '../../static/2.jpg'
class Parallax extends Component {
	constructor(props) {
		super(props)
		this.state = {
			position: 0,
			position2: 0
		}
	}
	componentDidMount() {
		const win = this.props.win
		win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img, 'position') })
		win.addEventListener('scroll', () => { this.parallaxEffect(this.refs.img2, 'position2') })
	}

	componentWillUnmount() {
		const win = this.props.win
		win.removeEventListener('scroll', this.parallaxEffect(this.refs.img, 'position'))
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
			// var pixelScrolled = startScrollTop - domOffsetTop;    			
			var percentScrolled = pixelScrolled / visibleScrollValue;
			var deltaTopScrollVal = 0;
			deltaTopScrollVal = percentScrolled * 100;   						 //向下滚动
			this.setState({
				[pos]: deltaTopScrollVal
			})
		}
	}
	render() {
		return (
			<div id="parallax">
				<div className="header">
					<h1>滚动视觉差</h1>
				</div>
				<div className="bg-attachment" ref="img">
					<div className="shadow">asda</div>
				</div>
				<div className="header">
					<h1 style={{ height: '2rem' }}>哈哈哈哈哈哈哈</h1>
				</div>
				<div className="bg-attachment2" ref="img2">
					<div className="shadow"></div>
				</div>
				<div className="header">
					<h1 style={{ height: '2rem' }}>哈哈哈哈哈哈哈</h1>
				</div>


				<style jsx>{`
            #parallax{
							width: 100%;
							margin: auto;
            }
            .header{
							background: #fff;
							overflow: hidden;
							width:100%;
							
            }
            .header h1{
							width:100%;
							height: 9rem;
							display:flex;
							justify-content: center;
							align-items: center;
            }
            .bg-attachment{
							background: url(${img5}) center center no-repeat;
							box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-webkit-box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-moz-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-o-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-ms-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							background-attachment: fixed;
							background-position:50% ${this.state.position}%;
            }
            .bg-attachment .shadow{
							width:100%;
							height:7rem;
							overflow:hidden;
							margin:auto;
            }
            .bg-attachment2{
							background: url(${img5}) center center no-repeat;
							box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-webkit-box-shadow:0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-moz-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-o-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							-ms-box-shadow: 0 7px 18px #000000 inset,0 -7px 18px #000000 inset;
							background-attachment: fixed;
							background-position:50% ${this.state.position2}%;
						}
						.bg-attachment2 .shadow{
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

export default Parallax

