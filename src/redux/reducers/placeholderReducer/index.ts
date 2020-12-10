import {ADD, SUBTRACT, ActionTypes} from './actionTypes'

interface PlaceholderState {
    counter: number
}

const initialState: PlaceholderState = {
    counter: 0,
}

export default function (state=initialState, action: ActionTypes): PlaceholderState {

    switch(action.type) {

        case ADD:
            return {
                ...state,
                counter: state.counter + 1
            };

        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - 1
            };

        default:
            return state;
    }
}