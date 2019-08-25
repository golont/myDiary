import React from "react";
import { Switch, Route } from "react-router-dom";
import { DataPage, SearchPage, Login, Logout, NotFoundPage, AboutPage } from "./../pages";

const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={DataPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default Routing;
