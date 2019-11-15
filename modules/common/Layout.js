import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderBar } from '../../components'
import { style } from '../../components/styles'
class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	async componentWillMount() {
		this.doSignIn()
	}
	async componentDidMount() {
		// console.log('home:', this.props.home)
	}
	async doSignIn() {
		let username = await localStorage.getItem('username');
		let token = await localStorage.getItem('token');
	}
	render() {
		return (
			<main>
				<HeaderBar url={this.props.url} home={this.props.home}></HeaderBar>
				{
					this.props.children
				}
				<style>
					{style()}
				</style>
			</main>
		)
	}
}

const mapStateToProps = ((state) => {
	return {
		authInfo: state.admin.data
	}
})
const mapDispatchToProps = {
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout)
