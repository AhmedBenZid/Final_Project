import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from "../ActionsTypes/types";

const initialState = {
    profile: null,
    circuits: [],
    loading: true,
    error: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_PROFILE:

            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                circuits: [],
                loading: false
            }
        default:
            return state;
    }
}