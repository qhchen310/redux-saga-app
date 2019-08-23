import { INCREMENT } from '../constants/counter'

const counter = (state = 1, action = {}) => {
    switch (action.type) {
        case INCREMENT:
            let counter = state + 1;
            console.log('counter:' + counter);
            return counter;
        default:
            return state;
    }
}

export default counter;