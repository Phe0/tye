import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Procedures from "./pages/Procedures";
import Procedure from "./pages/Procedure";
import NewProgress from "./pages/NewProgress";
import Rules from "./pages/Rules";
import Progress from "./pages/Progress";
import NewProcedure from "./pages/NewProcedure";
import NewRule from "./pages/NewRule";
import Rule from "./pages/Rule";
import isLawyer from "./utils/isLawyer";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import ThemeContext from "./context/theme";

function PrivateRoute({ component: Component, needsLawyer, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("accessToken") &&
        (!needsLawyer || (needsLawyer && isLawyer())) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <ThemeContext>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/rules" needsLawyer component={Rules} />
          <PrivateRoute exact path="/procedures" component={Procedures} />
          <PrivateRoute path="/procedure/:number/:id" component={Procedure} />
          <PrivateRoute
            needsLawyer
            path="/new-progress/:number/:id"
            component={NewProgress}
          />
          <PrivateRoute
            path="/progress/:number/:procedureId/:id"
            component={Progress}
          />
          <PrivateRoute
            path="/new-procedure"
            needsLawyer
            component={NewProcedure}
          />
          <PrivateRoute path="/new-rule" needsLawyer component={NewRule} />
          <PrivateRoute path="/rule/:id" needsLawyer component={Rule} />
        </Switch>
      </Router>
    </ThemeContext>
  );
}
