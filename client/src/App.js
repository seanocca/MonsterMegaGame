import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
