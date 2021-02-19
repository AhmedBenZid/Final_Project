import {
    ADD_CIRCUIT
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
            return state;
    }
}