import React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import HeaderRouters from './Routes';
import ErrorBoundary from './utils/errorBoundary';

class App extends React.Component {
    render() {
        return (
            <HeaderRouters/>
        );
    }
}


ReactDOM.render((
    <BrowserRouter>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </BrowserRouter>
), document.getElementById('root'));