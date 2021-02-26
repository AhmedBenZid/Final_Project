import axios from 'axios'
import {
    GET_CIRCUITS
} from '../ActionsTypes/types';


export const getCircuits = () => async (dispatch) => {
    try {
        const res = await axios.get('api/circuits/');
        dispatch({
            type: GET_CIRCUITS,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}

export const addCircuit = (newCir) => async dispatch => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.post('api/circuits/', newCir, config)
        dispatch(getCircuits)
    } catch (error) {
        console.error(error);
    }
}

export const removeCircuit = (cirId) => async dispatch => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        await axios.delete(`api/ciruits/${cirId}`, config);
        dispatch(getCircuits)
    } catch (error) {
        console.error(error);
    }
}