import { API_FETCH, API_FETCH_SUCCESS, API_FETCH_FAIL } from './types';
import { fetchRandomItem } from '../services/api';

// use "get" for actions and "fetch" for the api function or functions that use axios.
export const getRandomItem = (itemType) => async (dispatch) => {
    try {
        dispatch({ type: API_FETCH, itemType });
        const result = await fetchRandomItem(itemType);
        dispatch({ type: API_FETCH_SUCCESS, itemType, payload: result });
    } catch (e) {
        dispatch({ type: API_FETCH_FAIL, itemType, error: e });
    }
};