import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import React from "react";

const HeaderRouters = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
    </Switch>
);
export default HeaderRouters;