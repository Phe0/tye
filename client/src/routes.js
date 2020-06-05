import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Procedures from "./pages/Procedures";
import Procedure from "./pages/Procedure";
import NewProgress from "./pages/NewProgress";
import Rules from "./pages/Rules";
import Progress from "./pages/Progress";
import NewProcedure from "./pages/NewProcedure";
import NewRule from "./pages/NewRule";
import Rule from "./pages/Rule";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Procedures} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/procedures" component={Procedures} />
        <Route path="/procedure/:number/:id" component={Procedure} />
        <Route path="/new-progress/:number/:id" component={NewProgress} />
        <Route path="/progress/:number/:procedureId/:id" component={Progress} />
        <Route path="/new-procedure" component={NewProcedure} />
        <Route path="/new-rule" component={NewRule} />
        <Route path="/rule/:id" component={Rule} />
      </Switch>
    </Router>
  );
}
