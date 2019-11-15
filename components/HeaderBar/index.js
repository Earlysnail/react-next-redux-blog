import React, { Component } from 'react'
import { MENU } from '../../config/basicConfig'
import Router from 'next/router'
import theme from '../theme'
class HeaderBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			position: 'absolute',
			background: 'transparent',
			color: '#000',
			height: 0
		}
	}
	componentDidMount() {
		const win = window
		this.props.home && win.addEventListener('scroll', () => { win, this.parallaxEffect(win, 'position', 'background', 'color') })
	}

	componentWillUnmount() {
		const win = window
		this.props.home && win.removeEventListener('scroll', this.parallaxEffect(win, 'position', 'background', 'color'))
	} Ï
	parallaxEffect = (win, pos1, pos2, pos3) => {
		var windowHeight = win.outerHeight;
		var scrollTop = win && win.document && win.document.documentElement && win.document.documentElement.scrollTop;    								//滚动条滚动的高度
		if (scrollTop > windowHeight) {		//判断dom元素是否在可视区域
			this.setState({
				[pos1]: 'fixed',
				[pos2]: '#fff',
				[pos3]: '#000'
			})
		} else {
			this.setState({
				[pos1]: 'absolute',
				[pos2]: 'transparent',
				[pos3]: '#fff'
			})
		}
	}
	reverseNav = () => {
		let high = this.state.height
		this.setState({
			height: high === 0 ? 5 : 0
		})
	}
	render() {
		const logo = this.props.logo || '../../static/celitea.jpg';
		const pageName = '计算机精英协会Celitea';
		const curUrl = this.props.url;
		const curUrlKeywords = curUrl && curUrl.split('/') || [];
		const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
		return (
			this.props.home ? (
				<div className="headerBar">
					<div className="navToggle" onClick={this.reverseNav}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<section className='nav'>
						<ul className="navLeft">{
							MENU.map((item, iKey) => {
								const itemUrlKeywords = item.url && item.url.split('/') || [];
								const itemUrlKeyword = itemUrlKeywords.length > 1 ? itemUrlKeywords[1] : '/'
								return (
									<li
										className={itemUrlKeyword == curUrlKeyword ? 'left curLi' : 'left'}
										onClick={() => { Router.push(item.url) }}
										key={iKey}>
										{item.title}
									</li>
								)
							})

						}
						</ul>
						<ul className='navRight'>
							<li>
								<img src={logo} ></img>
							</li>
							<li>
								<span className="btn">登录</span>
							</li>
						</ul>
					</section>
					<style jsx>{`
											.headerBar{
												position: ${this.state.position};
												width: 100%;
												color: #fff;
												font-size: ${theme.fontsize};
												background-color: ${this.state.background};
												z-index: 900;
											}
											.nav{
												display: flex;
												justify-content: space-between;
												flex-wrap: nowrap;
												padding: 1% 10%;
											}
											.navLeft{
												width: 60%;
												display: flex;
												justify-content: space-between;
												flex-wrap: nowrap;
												padding: .1rem 0rem;
											}
											.navLeft li.curLi{
													border-bottom: .03rem solid #f2b535;
													color: #f2b535;
												}
											.navLeft li{
												font-size: .2rem;
												color:  ${this.state.color};
												line-height: .24rem;
												padding-bottom: .1rem;
												cursor: pointer;
											}
											.navLeft li:hover{
												border-bottom: .03rem solid #f2b535;
												color: #f2b535;
											}
											.navRight {
												width: 20%;
												display:flex;
												justify-content: center;
												flex-wrap: nowrap;
												.line-height: .54rem;
												padding: .05rem 0rem;
											}
											.navRight img{
												height: .42rem;
												margin: 0rem .1rem;
												border-radius: 50%;
											}
											.navRight .btn{
												display: inline-block;
												width: 1rem;
												line-height: .4rem;
												text-align: center;
                        border-radius: 30px;
                        background-color: #ffffff;
                        color: #000000;
												cursor: pointer;
												font-size: .17rem;
											}
											.navRight .btn:hover{
													opacity: 0.9;
											}
											@media screen and (max-width: 1100px) {
												.nav {
													width:100%;
													height: ${this.state.height}rem;
													display: flex;
													justify-content: space-between;
													flex-wrap: nowrap;
													padding:0;
													overflow: hidden;
													transition: height 0.5s;
												}
												.navLeft{
													width: 100%;
													display: flex;
													flex-direction: column;
													flex-wrap: nowrap;
													margin-top: .8rem;
													background-color: #000;
													align-content: center;
												}
												.navLeft li.curLi{
														border-bottom: .03rem solid #f2b535;
														color: #f2b535;
													}
												.navLeft li{
													font-size: .2rem;
													color: #fff;
													cursor: pointer;
													line-height: .24rem;
													padding: 0.1rem 0rem;
													text-align: center;
													border-bottom: .03rem solid #000;
												}
												.navLeft li:hover{
													border-bottom: .03rem solid #f2b535;
													color: #f2b535;
												}
												.navRight {
													width: 20%;
													display:none;
													justify-content: center;
													flex-wrap: nowrap;
													.line-height: .54rem;
													padding: .05rem 0rem;
												}
												.navRight img{
													height: .42rem;
													margin: 0rem .1rem;
													border-radius: 50%;
												}
												.navToggle {
													position: absolute;
													top: .2rem;
													right: 5%;
													height: .4rem;
													width: .4rem;
													display: flex;
													flex-direction: column;
													flex-wrap: nowrap;
													align-content: space-between;
												}
												.navToggle span {
													display: block;
													height:.05rem;
													background-color: #fff;
													margin: .04rem 0rem;
												}
										}
										`}
					</style>
				</div>)
				: (<div className="headerBar">
					<img src={logo} style={{ height: '.4rem', borderRadius: '50%', padding: '.09rem' }} className='left' ></img>
					<article className='left' >{pageName}</article>
					<section className='headerBarRight right'>
						<ul className='left'>{
							MENU.map((item, iKey) => {
								const itemUrlKeywords = item.url && item.url.split('/') || [];
								const itemUrlKeyword = itemUrlKeywords.length > 1 ? itemUrlKeywords[1] : '/'
								return (<li
									className={itemUrlKeyword == curUrlKeyword ? 'left curLi' : 'left'}
									onClick={() => {
										Router.push(item.url)
									}}
									key={iKey}>{item.title}</li>)
							})
						}
						</ul>
					</section>
					<style jsx>{`
										.headerBar{
												background-color: ${this.state.background};
												line-height: .58rem;
												height: .58rem;
												width: 100%;
												color: ${theme.mainfontcolor};
												font-size: ${theme.fontsize};
												z-index: 900;
												position: relative;
										}
										.headerBarRight{
												padding-right: 5rem;
										}
										.headerBarRight li.curLi{
												border-bottom: 3px solid ${theme.maincolor};
												color: ${theme.maincolor};
											}
										.headerBarRight li{
												font-size: ${theme.mainfontsize};
												padding: .18rem .2rem .12rem;
												color: ${theme.fontcolor};
												line-height: .24rem;
												cursor: pointer;
										}
									`}
					</style>
				</div>)
		)
	}
}



export {
	HeaderBar
}