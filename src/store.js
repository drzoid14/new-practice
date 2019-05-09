import {createStore, combineReducers, applyMiddleware} from 'redux';

import infoReducer from './reducers';

import thunk from 'redux-thunk'

export default createStore(
    combineReducers({
        
        infoReducer: infoReducer
    }),
    applyMiddleware(thunk)
)