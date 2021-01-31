import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFaults} from './actions/FaultAction';

function App(props) {
    const {fetchFaults} = props;
    useEffect(() => {
        fetchFaults()
    }, [fetchFaults])

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <button onClick={fetchFaults}>
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
