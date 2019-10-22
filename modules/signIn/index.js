import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSignIn } from '../../ducks'
import Router from 'next/router'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
           username: '',
           password: ''
        }
    }
    componentDidMount(){
       
    }
    async submit() {
        console.log("登录中...");
        const username = this.state.username;
        const password = this.state.password;
        const error = await this.props.doSignIn({username, password})
        if(error.code){
            console.log(':',error)
            return
        }
        Router.push('/error')
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
                            <dt><button style={{width: '2rem'}} onClick={()=>this.submit()}>确定</button></dt>
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
                    width: 3rem;
                    padding: .2rem;
                    border:1px solid #000;
                    box-shadow: 2px 2px 4px #888888;
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

const mapStateToProps = (state) => ({
    
})
const mapDispatchToProps = (dispatch) => ({
    doSignIn: ({username, password}) => dispatch(doSignIn({username, password}))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
