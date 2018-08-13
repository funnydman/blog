import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './helpers/errorBoundary';
import {AuthRouters, HeaderRouters, PostRouters} from './Routes';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary>
                    <HeaderRouters/>
                    <PostRouters/>
                    <AuthRouters/>
                </ErrorBoundary>
            </BrowserRouter>
        );
    }
}