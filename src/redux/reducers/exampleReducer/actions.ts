import {ADD, SUBTRACT, CHANGE, ActionTypes} from './actionTypes';

//action dispatch functions for each action type
// should match interface in actionTypes.ts

export const add = (): ActionTypes => {
    return {
        type: ADD,
    }
}

export const subtract = (): ActionTypes => {
    return {
        type: SUBTRACT,
    }
}

export const change = (amount: number): ActionTypes => {
    return {
        type: CHANGE,
        amount,
    }
}