import axios from 'axios';

export const FETCHED_FAULT_PENDING = "FETCHED_FAULT_PENDING";
export const FETCHED_FAULT_FULFILLED = "FETCHED_FAULT_FULFILLED";
export const FETCHED_FAULT_REJECTED = "FETCHED_FAULT_REJECTED";


export function fetchFaults() {
    return (dispatch) => {
        dispatch({
            type: 'FETCHED_FAULT',
            payload: axios.get('/api/izsu/arizakaynaklisukesintileri')
                .then(result => result.data)
        });
    }
}