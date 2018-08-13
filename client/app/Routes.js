import {Route, Switch} from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import React from "react";
import PostDetailPage from "./containers/PostDetailPage";
import SignUpPage from "./containers/SignUpPage";

export const HeaderRouters = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
    </Switch>
);


export const PostRouters = () => (
    <Switch>
        <Route path='/post/:postId' component={PostDetailPage}/>
    </Switch>
);

export const AuthRouters = () => (
    <Switch>
        <Route path='/signup' component={SignUpPage}/>
    </Switch>
);