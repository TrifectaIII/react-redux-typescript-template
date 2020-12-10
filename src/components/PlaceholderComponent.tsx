import * as React from 'react';
import {connect} from 'react-redux';
import {GlobalState} from '../redux/store';

import './PlaceholderComponent.css';

import {Action, placeholderAction} from '../redux/actions';

const mapStateToProps = (state:GlobalState, ownProps: {}) => {
    return {
        counter: state.placeholderReducer.counter,
    }
}

const mapDispatchToProps = {
   placeholderAction,
}

interface PlaceholderComponent_Props {
    counter: number,
    placeholderAction: () => Action,
}

interface PlaceholderComponent_State {

}

class PlaceholderComponent extends React.Component<PlaceholderComponent_Props, PlaceholderComponent_State> {

    // constructor (props) {
    //     super (props);
    // }

    render = () => {
        return (
            <div>
                <button onClick = {this.props.placeholderAction}>Click Me!</button>
                <h2>{this.props.counter}</h2>
            </div>
          );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceholderComponent);
