import {createStore} from 'redux';
import {globalReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    
    globalReducer,
    
    composeWithDevTools(),//this line enables redux devtools extention
);

export type GlobalState = ReturnType<typeof globalReducer>;