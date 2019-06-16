import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthRouters, HeaderRouters, PostRouters} from './Routes';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <HeaderRouters/>
                    <PostRouters/>
                    <AuthRouters/>
            </BrowserRouter>
        );
    }
}
