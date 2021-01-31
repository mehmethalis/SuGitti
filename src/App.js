import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFaults} from './actions/FaultAction';

function App(props) {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <button onClick={props.fetchFaults}>
                Hi
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = {
    fetchFaults
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
