import React, { useEffect, useState } from "react";
import { Switch, Redirect, Route } from "react-router";
import { getToken } from "../../Utils/Common";
import AuthOldToken from "../AuthOldToken";
import HomePage from "../HomePage";
import Profile from "../Profile";

const Routes = () => {
    const token = getToken();
    return (
        <Switch>
            <Redirect exact from="/sign-in" to="/" />
            <Route path="/" exact component={HomePage} />
            <Route path="/old-token" exact component={AuthOldToken} />
            <Route path="/dashboard/profile" exact render={(props) => <Profile history={props.history} />} />
            <Redirect  to="/" />

        </Switch>
    );
};

export default Routes;
