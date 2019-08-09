import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Account from './pages/Account';
import Factions from './pages/Factions';
import Bestiary from './pages/Bestiary';
import Lore from './pages/Lore';
import GameRules from './pages/GameRules';

import NotFound from './pages/NotFound';

const App = () => (
  <Fragment>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/factions" component={Factions} />
        <Route exact path="/bestiary" component={Bestiary} />
        <Route exact path="/lore" component={Lore} />
        <Route exact path="/gamerules" component={GameRules} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </Fragment>
);

export default App;
