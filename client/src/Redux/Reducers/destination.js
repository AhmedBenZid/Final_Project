import { GET_DESTINATIONS } from '../ActionsTypes/types'
const initialState = {
    destinations: []
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_DESTINATIONS:
            return {
                ...state,
                destinations: payload
            }
        default:
            return state;
    }
}