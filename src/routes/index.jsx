import * as React from "react";
import Profile from "../pages/profile";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route path="/tecnologies"></Route>
      <Route path="/projects"></Route>
    </Switch>
  );
};
export default Routes;
