import {
    API_FETCH,
    API_FETCH_SUCCESS,
    API_FETCH_FAIL,
    CLEAR_RESULT
} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    error: false,
    errorInfo: null,
    result: {
        itemType: '',
        data: null,
    }
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case API_FETCH:
            return { 
                ...state, 
                isFetching: true, 
                error: false,
                errorInfo: null,
                result: {
                    ...state.result,
                    itemType: action.itemType
                }
            };
        case API_FETCH_SUCCESS:
            return { 
                ...state, 
                isFetching: false, 
                error: false,
                errorInfo: null,
                result: {
                    ...state.result,
                    itemType: action.itemType,
                    data: action.payload
                }
            };
        case API_FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorInfo: action.error,
                result: {
                    ...state.result,
                    itemType: action.itemType
                }
            };
        case CLEAR_RESULT:
            return {
                ...state,
                result: {
                    ...state.result,
                    itemType: '',
                    data: null
                }
            };
        default:
            return state;
    }
}