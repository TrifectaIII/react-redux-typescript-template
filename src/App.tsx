import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import './App.css';

//get global state from redux
import {GlobalState} from './redux/store';

//get components
import PlaceholderComponent from './components/PlaceholderComponent';


//add non-redux props
interface OwnProps {
    //can use optional properties here like so:
    // property?: string
}

//mutate redux state to props, using ownprops if neccesary
const mapStateToProps = (state:GlobalState, ownProps: OwnProps) => {
    return {

    }
}

//add actions dispatch to props
const mapDispatchToProps = {

}

//combine into connector to redux store, and get type
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

//type of component props is combined non-redux and redux props
type Props = ReduxProps & OwnProps;

//type of component state
interface State {

}

class App extends React.Component<Props, State> {

    // constructor (props: Props) {
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

export default connector(App);
