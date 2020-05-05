import {
    API_FETCH,
    API_FETCH_SUCCESS,
    API_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    error: false,
    errorInfo: null,
    result: null
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case API_FETCH:
            return { ...state, isFetching: true, error: false, errorInfo: null };
        case API_FETCH_SUCCESS:
            return { 
                ...state, 
                isFetching: false, 
                error: false,
                errorInfo: null,
                result: action.payload
            };
        case API_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorInfo: action.error
            };
        default:
            return state;
    }
}