import axios from 'axios';
import {
    GET_PROFILE,
    PROFILE_ERROR,
    GET_GUIDE_PROFILE
} from '../ActionsTypes/types';

//Get User Profile
export const getUserProfile = () => async dispatch => {

    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.get('api/profile/me', config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Get Guides Profile
export const getGuidesProfiles = () => async (dispatch) => {
    try {
        const res = await axios('api/profile/guides');
        dispatch({
            type: GET_GUIDE_PROFILE,
            payload: res.data
        })
    } catch (error) {
        console.error(error.message);
    }
}

// Create or update a profile

export const creatProfile = (newProfile) => async dispatch => {
    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.post('api/profile', newProfile, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (error) {
        console.dir(error);

        const { errors, msg } = error.response.data;

        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }
        console.log(errors);
        if (msg) {
            alert(msg);
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}