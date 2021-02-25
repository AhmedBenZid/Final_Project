import axios from 'axios';
import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS,
    CLEAR_PROFILE,
    GET_ALLUSER,
    EDIT_USER
} from '../ActionsTypes/types';

//Set the user loading
const userLoading = () => (dispatch) => {
    dispatch({
        type: USER_LOADING,
    });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
    dispatch(userLoading());
    try {
        const res = await axios.post('/api/user/register', formData);
        dispatch({
            type: REGISTER_USER,
            payload: res.data,
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
            type: AUTH_ERRORS,
        });
    }
};

//Edite User
export const editUser = (user_id, editedUser) => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.put(`api/user/${user_id}`, editedUser, config)
        dispatch({
            type: EDIT_USER,
            payload: editedUser
        })
        dispatch(getAllUsers())
    } catch (error) {
        console.error(error.message);
    }
}
// Login User
export const loginUser = (formData) => async (dispatch) => {
    dispatch(userLoading());

    try {
        const res = await axios.post('api/user/auth', formData);
        dispatch({
            type: LOGIN_USER,
            payload: res.data,
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
            type: AUTH_ERRORS,
        });
    }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
    dispatch(userLoading());

    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        };
        const res = await axios.get('api/user/auth', config);
        dispatch({
            type: GET_AUTH_USER,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        }
        const res = await axios.get('api/user/all', config);
        dispatch({
            type: GET_ALLUSER,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
};

export const deleteUser = (user_id) => async (dispatch) => {
    try {
        //headers
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        }
        await axios.delete(`api/Profile/${user_id}`, config);
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERRORS,
        });
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: CLEAR_PROFILE,
    });
    dispatch({
        type: LOGOUT_USER,
    });
};