import {PLACEHOLDER_ACTION} from './actionTypes';

export interface Action {
    type: string,
}

export const placeholderAction = () => {

    return {
        type: PLACEHOLDER_ACTION,
    }
    
}