import axios from 'axios';
import { GET_DESTINATIONS, GET_DESTINATIONID, ADD_DESTINATIONS } from '../ActionsTypes/types';

export const getDestinations = () => async (dispatch) => {
    try {
        const res = await axios.get('api/destinations/');
        dispatch({
            type: GET_DESTINATIONS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getDestinationId = (des_id) => async (dispatch) => {
    try {
        const res = await axios.get(`api/destinations/${des_id}`);
        dispatch({
            type: GET_DESTINATIONID,
            payload: res
        })
    } catch (error) {
        console.log(error);
    }
}
// Add or Update Destination

export const addDestination = (newDes) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.post('api/destinations/', newDes, config)
        dispatch({
            type: ADD_DESTINATIONS,
            payload: res.data
        })
        dispatch(getDestinations());
    } catch (error) {
        console.log(error);
    }
}
export const deleteDestination = (dest_id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.delete(`api/destinations/remove/${dest_id}`, config)
        dispatch(getDestinations());
    } catch (error) {
        console.log(error);
    }
}