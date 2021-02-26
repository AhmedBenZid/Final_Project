
import { ADD_CIRCUIT, GET_CIRCUITS } from '../ActionsTypes/types';

const initialState = {
    circuits: [],
    isLoading: true
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_CIRCUITS:
            return {
                ...state,
                circuits: payload,
                isLoading: false
            }
        default:
            return state;
    }
}