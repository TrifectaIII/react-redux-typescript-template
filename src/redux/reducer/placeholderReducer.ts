import {PLACEHOLDER_ACTION} from '../actionTypes';
import {Action} from '../actions';

const initialState = {
    counter: 0,
}

export default function (state=initialState, action: Action) {

    switch(action.type) {

        case PLACEHOLDER_ACTION:
            return {
                ...state,
                counter: state.counter + 1
            };

        default:
            return state;
    }
}