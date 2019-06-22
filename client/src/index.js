import * as ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BaseRouters } from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BaseRouters />
    </Provider>,
    document.getElementById('root')
);
