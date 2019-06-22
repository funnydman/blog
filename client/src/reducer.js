import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import PostReducer from "./Post/reducers/reducer";

const BaseReducer = combineReducers({
    PostReducer,
    routing: routerReducer
});

export default BaseReducer;
