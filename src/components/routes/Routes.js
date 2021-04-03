import React from "react";
import { Switch, Redirect, Route } from "react-router";
import HomePage from "../HomePage";
import Profile from "../Profile";

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/sign-in" to="/" />
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard/profile" exact component={Profile} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
