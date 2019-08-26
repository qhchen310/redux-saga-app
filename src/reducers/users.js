import { handleActions } from 'redux-actions'

const initialState = {
    account: '',
    password: '',
    isAuthenticated: false,
    detail: []
}

const userReset = (state = {}) => {
    return state;
}

const userLogin = (state = {}, action = {}) => {
    return {

    }
}

const actions = {
    FETCH: {
        USERRESET: userReset,
        USERLOGIN: userLogin
    }
}

const userReducers = handleActions(actions, initialState);

export default userReducers;