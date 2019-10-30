import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import countReducer from './countReducer';

export default combineReducers({
    users: usersReducer,
    count: countReducer,
});