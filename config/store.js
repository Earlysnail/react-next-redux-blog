import { createStore, combineReducers, applyMiddleware } from 'redux'
import redux_thunk from 'redux-thunk'

import {

} from '../ducks'



//middleware
function createMiddleware () {
    return applyMiddleware(redux_thunk)
}


//reducer
function getReducer() {
    return combineReducers({

    })
}

//store
export const initStore = (initalStore={}) => {
    const middleware =  createMiddleware()
    let store = createStore(getReducer())
    return store
}