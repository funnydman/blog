import { createStore } from 'redux';
import BaseReducer from './reducer';

export default function configureStore(preloadedState) {
    return createStore(BaseReducer, preloadedState);
}
