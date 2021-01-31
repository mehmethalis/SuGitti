import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import RootReducer from '../reducers/RootReducer';
//Middlewares
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise, ReduxThunk, logger)
    )
);
