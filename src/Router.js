import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Janne from "./Janne";
import App from "./App";
import NotFound from "./NotFound";
import Kattla from "./Kattla";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/kaffe/Janne" component={Janne} />
      <Route exact path="/kaffe/Kattla" component={Kattla} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
