import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSignIn } from '../../ducks'
import Router from 'next/router'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {

    }
    async submit() {
        const username = this.state.username;
        const password = this.state.password;
        const data = await this.props.doSignIn({ username, password })
        if (data.code == 1) {
            console.log(data.message)
            return
        }
        Router.push('/radar')
    }
    render() {
        return (
            <div className='signIn'>
                <div className='container'>
                    <h3>登录</h3>
                    <section>
                        <dl>
                            <dt><span>用户名：</span><input type='text' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}></input></dt>
                        </dl>
                        <dl>
                            <dt><span>密&nbsp;&nbsp;&nbsp;码：</span><input type='password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} ></input></dt>
                        </dl>
                        <dl>
                            <dt><button style={{ width: '2rem', borderRadius: '.3rem', backgroundColor: '#2468F2', color: '#FFF' }} onClick={() => this.submit()}>确定</button></dt>
                        </dl>
                    </section>
                </div>
                <style global jsx>{`
                .signIn {
                    padding: .5rem .2rem;
                    display: flex;
                    justify-content: center;
                }
                .container {
                    height: 3rem;
                    width: 3.5rem;
                    padding: .4rem .2rem;
                    background: #FFF;
                    border-radius: 4px;
                    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, .05);
                    text-align: center;
                }
                dt{
                    display: flex;
                    justify-content: center;
                }
                section{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                section dl{
                    padding: .2rem 0;
                }
                `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = ((state) => {
    return {
        authInfo: state.admin.data
    }
})
const mapDispatchToProps = {
    doSignIn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
