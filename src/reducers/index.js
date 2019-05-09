import { SET_LOCATION, SET_NASA } from '../actions'

const initialState = {
    lat: null,
    lon: null,
    info: []
}

export default function infoReducer(state=initialState, action){

    if(action.type===SET_LOCATION) {
        console.log('setting location')
        return Object.assign({}, state, {
            lat: action.latitude,
            lon: action.longitude
        })
        
    }

    if(action.type===SET_NASA) {
        console.log('talking to nasa')
        return Object.assign({}, state, {
            info: action.nasa.info
        })
    }

    return state
}