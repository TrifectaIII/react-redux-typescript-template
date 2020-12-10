import {ADD, SUBTRACT, ActionTypes} from './actionTypes';

export const add = () : ActionTypes => {

    return {
        type: ADD,
    }
    
}

export const subtract = () : ActionTypes => {

    return {
        type: SUBTRACT,
    }
    
}