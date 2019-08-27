import { createActions } from 'redux-actions'

const createSuccessAction = (token)=>{
    return {
        detail : {
            user_token:token
        }
    }
}

const createFailureAction = (errorMessage)=>{
    return {
        errorMessage: errorMessage
    }
}

const actions = createActions({
    FETCH: {
        CLEARNUP: undefined,
        LOGIN: undefined,
        SUCCESS: createSuccessAction,
        FAILURE: createFailureAction
    }
});

export default actions;