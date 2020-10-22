import * as React from "react";
import Profile from "../pages/profile";
import Tecnologies from "../pages/tecnologies";
import Projects from "../pages/projects";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route path="/tecnologies">
        <Tecnologies />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};
export default Routes;
