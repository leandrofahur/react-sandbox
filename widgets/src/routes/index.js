import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Message from "../pages/Message";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/message" component={Message}></Route>
    </Switch>
  );
};

export default Routes;
