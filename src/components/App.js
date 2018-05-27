/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Router } from "react-router-dom";

import LoginContainer from './containers/Login.container';
import AboutPage from "./AboutPage";
import HomePageContainer from "./containers/HomePage.container";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PrivateRoute from "./PrivateRoute";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // const activeStyle = { color: 'blue' };
    return (
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute exact path="/" component={HomePageContainer} />
        <PrivateRoute path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
