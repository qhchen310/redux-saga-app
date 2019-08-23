import {combineReducers} from 'redux';
import users from './users';
import counter from './counter'
import createSagaMiddleware from 'redux-saga';

export default combineReducers({
    users,
    counter
});