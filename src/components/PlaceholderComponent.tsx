import * as React from 'react';
import {connect} from 'react-redux';
import {GlobalState} from '../redux/store';

import './PlaceholderComponent.css';

import {placeholderAction} from '../redux/actions';

const mapStateToProps = (state:GlobalState, ownProps: any) => {
    return {
        counter: state.placeholderReducer.counter,
    }
}

const mapDispatchToProps = {
   placeholderAction,
}

interface PC_Props {
    counter: number,
    placeholderAction: any,
}

interface PC_State {

}

class PlaceholderComponent extends React.Component<PC_Props, PC_State> {

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
