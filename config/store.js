import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    admin
} from '../ducks'



//middleware
function createMiddleware () {
    return applyMiddleware(thunkMiddleware)
}


//reducer
function getReducer() {
    return combineReducers({
        admin
    })
}

//store
export const initStore = (initalStore={}) => {
    const middleware =  createMiddleware()
    let store = createStore(getReducer(), initalStore, middleware)
    return store
}