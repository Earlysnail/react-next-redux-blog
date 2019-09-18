import React, { Component } from 'react'

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
    doSignIn = (username, password) => {
        alert("登录中。。。。")
    }
    render() {
        return (
            <div className='signIn'>
                <div className='container'>
                    <h3>登录</h3>
                    <form>
                        <div>
                            <span>用户名：</span>
                            <input type='text' value={this.username}></input>
                        </div>
                        <div>
                            <span>密&nbsp;&nbsp;&nbsp;码：</span>
                            <input type='password' value={this.password}></input>
                        </div> 
                        <div>
                            <input type='submit' value='确定' style={{width: '13rem'}} onClick={this.doSignIn}></input>
                        </div> 
                    </form>
                </div>
                <style global jsx>{`
                body{
                    margin: 0;
                    padding: 0;
                }
                .signIn {
                    padding: 5rem 2rem;
                    display: flex;
                    justify-content: center;
                }
                .container {
                    height: 20rem;
                    width: 20rem;
                    padding: 2rem;
                    border:1px solid #000;
                    box-shadow: 2px 2px 4px #888888;
                    text-align: center;
                }
                .container form div{
                    padding: 1rem;
                }
                `}
                </style>
            </div>
        )
    }
    
}

export default SignIn