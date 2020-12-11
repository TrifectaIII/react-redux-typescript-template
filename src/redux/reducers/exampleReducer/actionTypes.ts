//types for actions
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const CHANGE = 'CHANGE';

//types of actions
interface Add {
    type: typeof ADD
}

interface Subtract {
    type: typeof SUBTRACT
}

interface Change {
    type: typeof CHANGE
    amount: number
}

//union all action types
export type ActionTypes = Add | Subtract | Change;