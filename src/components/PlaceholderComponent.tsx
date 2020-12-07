import * as React from 'react';
import {connect} from 'react-redux';
import {GlobalState} from '../redux/store';

import './PlaceholderComponent.css';

class Component extends React.Component {

    // constructor (props) {
    //     super (props);
    // }

    render = () => {
        return (
            <div>
                <h2>This is a component</h2>
            </div>
          );
    }
    
}

const mapStateToProps = (state:GlobalState, ownProps: any) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
