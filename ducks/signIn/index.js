import axios from 'axios'
import { API_SERVER } from '../../config'
//type
const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
const SIGN_IN_FAIL = 'SIGN_IN_FAIL'
const DO_SIGN_IN_REQUEST = 'DO_SIGN_IN_REQUEST'
const DO_SIGN_IN_SUCCESS = 'DO_SIGN_IN_SUCCESS'
const DO_SIGN_IN_FAIL = 'DO_SIGN_IN_FAIL'



//reducer
export function admin (state = {}, action = {}){
    switch(action.type){
        case DO_SIGN_IN_REQUEST: return Object.assign({}, state, { loading: true, error: null})
        case DO_SIGN_IN_SUCCESS: return Object.assign(
                {}, 
                state, 
                { data: Object.assign({}, state.data, { token: action.token, username: action.username, password: action.password})},
                { loading: false, error: null }
            )
        case DO_SIGN_IN_FAIL: return Object.assign({}, state, { loading: false, error: action.error})
        default: return state
    }
}



export const signIn = ({ username, password}) => async (dispatch) => {
    console.log("1")
    let localUsername = await localStorage.getItem('username')
    let localPassword = await localStorage.getItem('password')
    let token = await localStorage.getItem('token')
    let loginError = 'login error'
    console.log('signin:', username, password, localUsername, localPassword)
    if(username && password){
        if(localUsername && username == localUsername ){
            if(localPassword && password == localPassword){
                password = localPassword
                dispatch({
                    type: PROFILE_ADMIN_SIGNIN_SUCCESS,
                    token,
                    username,
                    password
                })
                return null
            }else if(!localPassword){
                return doSignin(dispatch, {username, password})
            }else {
                return loginError
            }
        }else{
            return doSignin(dispatch, {username, password})
        }     
    }
    return loginError

    
}

export const doSignIn = ({ username, password}) => async (dispatch) => {
    dispatch({
        type: DO_SIGN_IN_REQUEST
    })
    const url = `${API_SERVER}/login`
    try{
        // const data = await axios.post(url, {
        //     username: username,
        //     password: password
        // })
        const data = {
            data: {
                username: 'admin',
                password: '123456',
                token: '123456',
                error: null
            },
            code: 'success',
            message: '登录成功'
        }
        if(data.code === 'error'){
            dispatch({
                type: DO_SIGN_IN_FAIL,
                error: data.message
            })
            return data.message
        } else {
            const token = data.data.token
            localStorage.setItem('token', token)
            dispatch({
                type: DO_SIGN_IN_SUCCESS,
                data: data.data
            })
            return data.data
        }    
    }catch (e) {
        console.log(e);
        dispatch({
            type: DO_SIGN_IN_FAIL,
            error: e.message
        })
        return e.message
    }  
        
}
