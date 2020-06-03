import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Procedures from "./pages/Procedure";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Procedures} />
      </Switch>
    </Router>
  );
}
