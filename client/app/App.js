import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './utils/errorBoundary';
import HeaderRouters from './Routes';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary>
                    <HeaderRouters/>
                </ErrorBoundary>
            </BrowserRouter>
        );
    }
}