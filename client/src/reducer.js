import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import Home from './Home/reducers/reducer';

const BaseReducer = combineReducers({
    Home,
    routing: routerReducer
});

export default BaseReducer;
