import {ADD, SUBTRACT, CHANGE, ActionTypes} from './actionTypes'

//type of state slice
interface ExampleState {
    counter: number
}

//starting state
const initialState: ExampleState = {
    counter: 0,
}

//handle actions
export default 
    function (
        state: ExampleState = initialState, 
        action: ActionTypes
    ): ExampleState {

    switch(action.type) {

        case ADD:
            return {
                ...state,
                counter: state.counter + 1,
            };

        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - 1,
            };

        case CHANGE:
            return {
                ...state,
                counter: state.counter + action.amount,
            };

        default:
            return state;
    }
}