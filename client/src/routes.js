import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Home/containers/HomePage";
import AboutPage from "./Template/AboutPage";
import React from "react";
import PostDetailPage from "./Post/containers/PostDetailPage";
import SignUpPage from "./Post/containers/SignUpPage";

export const BaseRouters = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/post/:postId' component={PostDetailPage}/>
            <Route path='/signup' component={SignUpPage}/>
        </Switch>
    </BrowserRouter>
);
