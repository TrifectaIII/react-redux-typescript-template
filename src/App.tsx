import * as React from 'react';
import {connect} from 'react-redux';
import { GlobalState } from './redux/store';

import './App.css';

import PlaceholderComponent from './components/PlaceholderComponent';

const mapStateToProps = (state: GlobalState, ownProps: any) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

interface App_Props {

}

interface App_State {

}

class App extends React.Component<App_Props, App_State> {

    // constructor (props) {
    //     super (props);
    // }

    render = () => {
        return (
            <div>
                <h1>React-Redux Template</h1>
                <PlaceholderComponent/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
