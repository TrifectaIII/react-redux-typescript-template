import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
