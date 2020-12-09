import {createStore} from 'redux';
import {globalReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

var store = createStore(
    
    globalReducer,
    
    composeWithDevTools(),//this line enables redux devtools extention
);

export default store;

export type GlobalState = ReturnType<typeof globalReducer>;