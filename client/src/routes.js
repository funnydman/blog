import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/containers/Home';
import About from './Template/AboutPage';
import PostDetailPage from './Post/containers/PostDetailPage';
import SignUpPage from './Post/containers/SignUpPage';

export const BaseRouters = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post/:postId" component={PostDetailPage} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    </BrowserRouter>
);
