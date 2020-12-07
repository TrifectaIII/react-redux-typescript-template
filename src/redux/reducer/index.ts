import {combineReducers} from 'redux'
import placeholderReducer from './placeholderReducer'

export const globalReducer = combineReducers({
    placeholderReducer,
});