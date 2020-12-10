import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//for allowing store access across all components
import {Provider} from 'react-redux';

//access redux store
import store from './redux/store';

//access application component
import App from './App';

import './index.css';

ReactDOM.render(

    <React.StrictMode>

        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
