import {combineReducers} from 'redux';
import userReducers from './users';
import counter from './counter'

export default combineReducers({
    userReducers,
    counter
});