import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './utils/errorBoundary';
import {HeaderRouters, PostRouters} from './Routes';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary>
                    <HeaderRouters/>
                    <PostRouters/>
                </ErrorBoundary>
            </BrowserRouter>
        );
    }
}