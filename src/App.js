import React from 'react';
import './App.css';
import {connect} from 'react-redux';

//import component
import Component from './components/Component';

function App() {
  return (
    <div>
        <h1>React-Redux Template</h1>
        <Component/>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
