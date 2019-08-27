import { handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const fetchCleanup = (state) =>
    state
        .set('isFetching',false)
        .set('isAuthenticated',false)
        .set('errorMessage','')
        .set('detail',{});


export const fetchLogin = (state) => 
    state
        .set('isFetching',true)
        .set('isAuthenticated',false)
        .set('errorMessage','')
        .set('detail',{});

export const fetchSuccess = (state,action) =>
    state
        .set('isFetching',false)
        .set('isAuthenticated',true)
        .set('errorMessage','')
        .set('detail',{user_token:action.payload.token});

export const fetchFailure = (state,action) =>
    state
        .set('isFetching',false)
        .set('isAuthenticated',false)
        .set('errorMessage',action.payload.error)
        .set('detail',{});


const actions = {
    FETCH: {
        CLEARNUP: fetchCleanup,
        LOGIN: fetchLogin,
        SUCCESS: fetchSuccess,
        FAILURE: fetchFailure
    }
}

const initialState = new Map({
    isFetching: false,
    isAuthenticated: false,
    errorMessage: '',
    detail: {}
});

const userReducer = handleActions(actions, initialState);

export default userReducer;