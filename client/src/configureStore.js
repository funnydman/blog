import {applyMiddleware, compose, createStore} from 'redux';
import BaseReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(
        BaseReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware
            )
        ),
    );
}
