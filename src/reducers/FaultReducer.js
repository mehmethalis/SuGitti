import {FETCHED_FAULT_FULFILLED, FETCHED_FAULT_REJECTED, FETCHED_FAULT_PENDING} from '../actions/FaultAction';


const initialState = {
    fetching: false,
    faults: [],
    error: {}
}

const FaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_FAULT_PENDING:
            return {...state, fetching: true};
        case FETCHED_FAULT_FULFILLED:
            return {...state, faults: action.payload, fetching: false};
        case FETCHED_FAULT_REJECTED:
            return {...state, error: action.payload, fetching: false};
        default:
            return state;
    }
}
export default FaultReducer;