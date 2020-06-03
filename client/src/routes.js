import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Procedures from "./pages/Procedures";
import Procedure from "./pages/Procedure";
import NewProgress from "./pages/NewProgress";
import Rules from "./pages/Rules";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Procedures} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/procedures" component={Procedures} />
        <Route path="/procedure/:number" component={Procedure} />
        <Route path="/new-progress/:number" component={NewProgress} />
      </Switch>
    </Router>
  );
}
