import React from 'react';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './utils/errorBoundary';
import HeaderRouters from "./Routes";

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