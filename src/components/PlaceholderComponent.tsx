import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import './PlaceholderComponent.css';

//get global state from redux
import {GlobalState} from '../redux/store';

//get dispatch actions
import {add, subtract} from '../redux/reducers/placeholderReducer/actions';


//add non-redux props
interface OwnProps {

}

//mutate redux state to props, using ownprops if neccesary
const mapStateToProps = (state:GlobalState, ownProps: OwnProps) => {
    return {
        counter: state.placeholderReducer.counter,
    }
}

//add dispatch actions to props
const mapDispatchToProps = {
   add,
   subtract,
}

//combine into connector to redux store, and get type
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

//type of component props is combined non-redux and redux props
type Props = ReduxProps & OwnProps

//type of component state
interface State {

}

//create component using types
class PlaceholderComponent extends React.Component <Props, State> {

    // constructor (props: Props) {
    //     super (props);
    // }

    render = () => {
        return (
            <div>
                <button onClick = {()=>this.props.add()}>Add</button>
                <br/>
                <button onClick = {()=>this.props.subtract()}>Subtract</button>
                <h2>{this.props.counter}</h2>
            </div>
          );
    }
}

export default connector(PlaceholderComponent);
