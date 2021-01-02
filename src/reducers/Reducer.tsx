import LoginReducer from "./LoginReducer";
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    loginReducer: LoginReducer,
    router: routerReducer
});