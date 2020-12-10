export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

interface Add {
    type: typeof ADD
}

interface Subtract {
    type: typeof SUBTRACT
}

export type ActionTypes = Add | Subtract;