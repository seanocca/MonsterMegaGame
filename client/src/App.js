import React, { Fragment, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import AdminLogin from './pages/AdminLogin';
import Account from './pages/Account';
import Factions from './pages/Factions';
import Bestiary from './pages/Bestiary';
import Lore from './pages/Lore';
import GameRules from './pages/GameRules';

import UsersDashboard from './pages/UsersDashboard';
import BeastsDashboard from './pages/BeastsDashboard';
import AugmentsDashboard from './pages/AugmentsDashboard';
import FactionsDashboard from './pages/FactionsDashboard';

import NotFound from './pages/NotFound';

import { userHasAuthenticated, getUser } from './store/actions';

const App = ({ userHasAuthenticated, getUser }) => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);

  useEffect(() => {
    Auth.currentSession()
      .then((user) => {
        getUser();
        userHasAuthenticated(true);
      }).catch((err) => {
        if (err === 'No current user') {
          userHasAuthenticated(false);
        } else {
          console.log('Error testing for current session', err);
        }
      });
  }, [userHasAuthenticated, getUser]);

  const childProps = {
    isAuthenticated,
  };

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <UnauthenticatedRoute exact path="/login" component={Login} props={childProps} />
        <UnauthenticatedRoute exact path="/login/reset" component={ResetPassword} props={childProps} />
        <AuthenticatedRoute exact path="/admin" component={AdminLogin} props={childProps} />
        <AuthenticatedRoute exact path="/account" component={Account} props={childProps} />
        <Route exact path="/factions" component={Factions} />
        <Route exact path="/bestiary" component={Bestiary} />
        <Route exact path="/lore" component={Lore} />
        <Route exact path="/gamerules" component={GameRules} />
        <AuthenticatedRoute exact path="/dashboard/users" component={UsersDashboard} props={childProps} />
        <AuthenticatedRoute exact path="/dashboard/beasts" component={BeastsDashboard} props={childProps} />
        <AuthenticatedRoute exact path="/dashboard/augments" component={AugmentsDashboard} props={childProps} />
        <AuthenticatedRoute exact path="/dashboard/factions" component={FactionsDashboard} props={childProps} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default withRouter(connect(null, { userHasAuthenticated, getUser })(App));
