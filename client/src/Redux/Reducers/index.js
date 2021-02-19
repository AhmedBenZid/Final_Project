import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './auth';
import profile from './profile';
import destination from './destination';

export default combineReducers({
    alert, authReducer, profile, destination
});