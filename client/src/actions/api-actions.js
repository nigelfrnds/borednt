import { API_FETCH, API_FETCH_SUCCESS, API_FETCH_FAIL } from './types';
import { fetchRandomMovie } from '../services/api';

// use "get" for actions and "fetch" for the api function or functions that use axios.
export const getRandomMovie = () => async (dispatch) => {
    try {
        dispatch({ type: API_FETCH });
        const result = await fetchRandomMovie();
        dispatch({ type: API_FETCH_SUCCESS, payload: result });
    } catch (e) {
        dispatch({ type: API_FETCH_FAIL, error: e });
    }
};