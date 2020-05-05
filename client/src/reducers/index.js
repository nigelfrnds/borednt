import { combineReducers } from 'redux';
import apiReducer from './api-reducer';



const slideReducer = (selectedSlide = 0, action) => {
    
}

export default combineReducers({
    apiReducer,
    results: []
});