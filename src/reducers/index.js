import {combineReducers} from 'redux';
import localReducer from './LocalReducers';
// import fetchSelected from './searchedReducers';

const rootReducers = combineReducers ({
    weather: localReducer,
});

export default rootReducers;