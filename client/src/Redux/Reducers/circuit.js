import {
    ADD_CIRCUIT,
    GET_CERCUITS
} from '../ActionsTypes/types';

const initialState = {
    circuits: [],
    isLoading: true
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CIRCUIT:
            return {
                ...state,
                circuits: payload,
                isLoading: false
            }
        case GET_CERCUITS:
            return {
                ...state,
                circuits: payload,
                isLoading: false
            }
        default:
            return state;
    }
}