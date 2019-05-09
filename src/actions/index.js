// import { SubmissionError } from 'redux-form'
// const { API_BASE_URL } = require('../config')


export const SET_LOCATION = "SET_LOCATION";
export const setLocation = location => ({
    type: SET_LOCATION,
    location
})

export const SET_NASA = "SET_NASA";
export const setNasa = nasa => ({
    type: SET_NASA,
    nasa
})

export const getGeolocation = () => async dispatch => {
    const geolocation = navigator.geolocation;
    console.log('looking for location')
    geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        dispatch({ type: SET_LOCATION, payload: position.coords });
    },
        error => {
            if (error.code === 1) {
                console.log('well crap');
            }
        }
    );
};
