import {routerReducer} from 'react-router-redux';
import {combineReducers} from "redux";

const BaseReducer = combineReducers({
    routing: routerReducer
});

export default BaseReducer;
