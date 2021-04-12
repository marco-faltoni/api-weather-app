import {combineReducers} from 'redux';
import localReducer from './LocalReducers';

const rootReducers = combineReducers ({
    weather: localReducer,
});

export default rootReducers;