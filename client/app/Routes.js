import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import React from "react";
import PostDetail from "./components/posts/PostDetail";

export const HeaderRouters = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </Switch>
);


export const PostRouters = () => (
    <Switch>
        <Route path='/post/:postId' component={PostDetail}/>
    </Switch>
);
