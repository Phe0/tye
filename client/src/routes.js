import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Procedures from "./pages/Procedures";
import Procedure from "./pages/Procedure";
import Rules from "./pages/Rules";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Procedures} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/procedures" component={Procedures} />
        <Route path="/procedure/:id" component={Procedure} />
      </Switch>
    </Router>
  );
}
