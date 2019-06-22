import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './Template/AboutPage';
import SignUpPage from './Auth/SignUpPage';
import { PostDetail, PostList } from './Post/containers/posts';
import { Switch } from 'react-router';

export const BaseRouters = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/about" component={About} />
            <Route path="/posts/:postId" component={PostDetail} />
            <Route path="/posts/" component={PostList} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    </BrowserRouter>
);
